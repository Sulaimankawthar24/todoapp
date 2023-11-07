function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}


// Get local storage
const getDb = (DB_NAME) => {
    if (!DB_NAME) {
      throw new Error("DB_NAME is missing...");
    }
    return JSON.parse(localStorage.getItem(DB_NAME)) || [];
  };
  
  const setDb = (DB_NAME, newData) => {
    if (!DB_NAME) {
      throw new Error("DB_NAME is missing...");
    }
  
    if (!newData) {
      throw new Error("Data is missing...");
    }
    localStorage.setItem(DB_NAME, JSON.stringify(newData));
  };
  
  // todo preview
  const showPreview = (id) => {
    setDb("current_preview_todo_id", id);
    window.location.href = "/preview.html";
  };
  
  