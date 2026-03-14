const errorHandler = (err, req, res, next) => {
console.error(err);
console.log("IM IN ERROR HANDLER");
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message || "Internal Server Error";


    // mongoose bad object id error 
    if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid Id Format";
    }

    // mongoose duplicate Key error

    if (err.code === 11000) {

        statusCode = 400;
        message = "Duplicate field value entered";
    }

    // mongoose Validation error 
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors).map(val => val.message).join(" , ");
    }
    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
}

export default errorHandler;
