export const scrollIntoView: svelte.JSX.EventHandler = ({currentTarget}) => {
    const scrollToElement = document.querySelector(
        currentTarget.getAttribute('href')
    )

    if (!scrollToElement) return

    const mediaQeury = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    scrollToElement.scrollIntoView({
        behavior: mediaQeury.matches ? 'auto':'smooth',
    })
}
