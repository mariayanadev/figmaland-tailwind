export const Button = ({ children, variant = "primary", isBold = false }) => {
    return (
        <button
            className={`flex items-center justify-center p-4 rounded-[35px] ${
                variant === "primary" 
                ? "bg-primary text-white" 
                : "bg-white text-primary"
            } 
            ${isBold && "font-graphik-bold"}
            text-xl leading-5`}
        >
            {children}
        </button>
    );
};
