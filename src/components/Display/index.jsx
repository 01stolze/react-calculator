import P from 'prop-types'

export const Display = (props) => {
  return (
    <>
      <div className="previous-display">
        <h1>{props.previousDisplay}</h1>
      </div>
      <div className="display">
        <h1 className="first-number">{props.display}</h1>
      </div>
    </>
  )
}

Display.propTypes = {
  display: P.any,
  previousDisplay: P.any,
}
