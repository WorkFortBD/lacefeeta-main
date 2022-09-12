/**
 * windowScrollPosition
 * 
 * @param int from position
 * @param int offset from top position
 * 
 * @return void windows scrolls to that position
 */
export const windowScrollPosition = (from = 0, offsetTop = 50) => {
    window.scrollTo(from, offsetTop);
}