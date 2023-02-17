import './index.css'

const TabItem = props => {
  const {tabDetails, findOut, isActive} = props
  const {displayText, tabId} = tabDetails
  const addStyle = isActive ? 'active-tab-btn' : ' '

  const identifyTab = () => {
    findOut(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${addStyle}`}
        onClick={identifyTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
