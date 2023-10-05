const AppError = require("../utils/AppError");
 
// roleToVerify = "admin" / "customer" / "sale" (que foram definidos na role no Banco de Dados)
// ['admin', 'customer', 'sale'].includes('sale')

function verifyUserAuthorization(roleToVerify) {
    return (request, response, next) => {
        const { role } = request.user;

        if (!roleToVerify.includes(role)) {
            throw new AppError("Unauthorized", 401);
        }
        return next();
    }
}

module.exports = verifyUserAuthorization;