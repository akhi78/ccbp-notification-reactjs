const Notification = (props) => {
  return (
    <div className="section">
      <div className={props.cls}>
        <img src={props.url} />
        <p>{props.content}</p>
      </div>
    </div>
  );
};

const element = (
  <div className="bg_container">
    <h1>Notifications</h1>
    <Notification
      cls="info"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      content="Information message"
    />
    <Notification
      cls="success"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      content="Success message"
    />
    <Notification
      cls="warn"
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      content="Warning message"
    />
    <Notification
      cls="Error"
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      content="Error message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
