const TplMainHeader = ({children}) => {
    return (
        <section className="flex flex-row justify-between items-center gap-2 bg-first rounded-lg p-5 text-white w-full">
            {children}
        </section>
    );
}

export default TplMainHeader;