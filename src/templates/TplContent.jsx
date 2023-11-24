const TplContent = ({ children }) => {
    return (
        <article className="absolute z-0 top-0 px-2 md:px-10 pt-[5.5rem] md:pt-[7.5rem] pb-10 gap-5 bg-general w-full h-screen flex items-center justify-center">
            <section className="h-full flex flex-col gap-2 max-w-screen-all w-full">
                {children}
            </section>
        </article>
    );
}

export default TplContent;