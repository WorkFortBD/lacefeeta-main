export const onPageChangeHandler = (args) => {
    const {page, dispatch, fn} = args;
    if(!page) return;
    
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(fn(page.selected + 1));
}