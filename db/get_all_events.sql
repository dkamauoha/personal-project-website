SELECT * FROM users u
JOIN appointments a ON u.auth_id = a.user_id
WHERE u.auth_id = $1; 