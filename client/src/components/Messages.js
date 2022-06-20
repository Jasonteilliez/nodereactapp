import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Messages() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/messages");
    const items = await data.json();
    setItems(items);
  };

  return (
    <div id="messages">
      <form method="POST" action="/addMessage">
        <input type="text" name="user" />
        <input type="text" name="msg" />
        <input type="submit" value="Send" />
      </form>
      {items.map((item) => (
        <div>
          <p>{item.username}</p>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Messages;
