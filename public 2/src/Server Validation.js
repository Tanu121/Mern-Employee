const { check, validationResult } = require('express-validator');

app.post('/api/login', [
    check('f_userName').not().isEmpty().withMessage('Username is required'),
    check('f_Pwd').not().isEmpty().withMessage('Password is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Continue with login logic
});
