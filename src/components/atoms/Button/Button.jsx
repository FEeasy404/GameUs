function Button ({href, size, label, active, primary, onClick}) {
  const classList = ['button', size, primary ? '': 'secondary', active ? '' : 'disabled'];

  return (
    <>
    { href ? 
      <a href={href} className={`${classList.join(' ')}`}>
        {label}
      </a> 
     : 
      <button type='button' onClick={onClick} className={`${classList.join(' ')}`}>
        {label}
      </button>
    }
    </>
  )
}

export default Button;