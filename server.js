// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

// In-memory storage for demo purposes
let confirmationCodes = {};

app.post('/api/password-reset/request', (req, res) => {
    const { usernameOrEmail } = req.body;

    // Validate the user exists
    const user = findUserByUsernameOrEmail(usernameOrEmail);
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Generate a confirmation code
    const confirmationCode = generateConfirmationCode();

    // Store the confirmation code with expiration
    confirmationCodes[confirmationCode] = {
        userId: user.id,
        expiresAt: Date.now() + 3600000, // Expires in 1 hour
    };

    // Send the confirmation code via email
    sendConfirmationEmail(user.email, confirmationCode);

    res.json({ message: 'Confirmation code sent to your email address' });
});

// Function to send email using nodemailer
function sendConfirmationEmail(email, code) {
    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'your_email@example.com',
            pass: 'your_email_password',
        },
    });

    const mailOptions = {
        from: 'Your App <your_email@example.com>',
        to: email,
        subject: 'Password Reset Confirmation Code',
        text: `Your confirmation code is: ${code}. This code is valid for 1 hour.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending confirmation email:', error);
        } else {
            console.log('Confirmation email sent:', info.response);
        }
    });
}

app.post('/api/password-reset/verify', (req, res) => {
    const { confirmationCode } = req.body;

    const codeData = confirmationCodes[confirmationCode];
    if (!codeData) {
        return res.status(400).json({ error: 'Invalid confirmation code' });
    }

    if (Date.now() > codeData.expiresAt) {
        delete confirmationCodes[confirmationCode];
        return res.status(400).json({ error: 'Confirmation code has expired' });
    }

    // Confirmation code is valid
    res.json({ valid: true });
});


app.post('/api/password-reset/update', (req, res) => {
    const { confirmationCode, newPassword } = req.body;

    const codeData = confirmationCodes[confirmationCode];
    if (!codeData) {
        return res.status(400).json({ error: 'Invalid confirmation code' });
    }

    if (Date.now() > codeData.expiresAt) {
        delete confirmationCodes[confirmationCode];
        return res.status(400).json({ error: 'Confirmation code has expired' });
    }

    // Update the user's password
    const userId = codeData.userId;
    updateUserPassword(userId, newPassword);

    // Invalidate the confirmation code
    delete confirmationCodes[confirmationCode];

    res.json({ success: true });
});

// Function to update the user's password
function updateUserPassword(userId, newPassword) {
    // Implement password update logic here
    // Ensure you hash the password before storing it
}


// Utility functions
function generateConfirmationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
}

function findUserByUsernameOrEmail(usernameOrEmail) {
    // Implement user lookup logic here
    // For demo, return a mock user
    return {
        id: 'user_1234',
        email: 'user@example.com',
        username: 'user123',
    };
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
