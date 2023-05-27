export const BorderedDiv = ({ children }) => {
    return (
        <div className="border-b py-2 flex gap-2">
            {children}
        </div>
    );
}