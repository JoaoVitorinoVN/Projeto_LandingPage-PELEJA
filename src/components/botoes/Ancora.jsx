import React from 'react'

const Ancora = ({target, children}) => {
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
  return (
      <a href={target} onClick={handleScroll}>{children}</a>
  )
}

export default Ancora
