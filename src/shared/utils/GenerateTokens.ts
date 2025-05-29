import jwt from "jsonwebtoken"

function generateToken(userId: string, role: string) {
    const accessToken = jwt.sign({ userId, role}, process.env.JWT_SECRET!, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ userId }, process.env.REFRESH_SECRET!, { expiresIn: "7d" });
    return { accessToken, refreshToken };
}