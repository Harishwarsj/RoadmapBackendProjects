function hideAll() {
  document.getElementById("createSection").style.display = "none";
  document.getElementById("getSection").style.display = "none";
  document.getElementById("deleteSection").style.display = "none";
}

function showCreate() {
  hideAll();
  document.getElementById("createSection").style.display = "block";
}

function showGet() {
  hideAll();
  document.getElementById("getSection").style.display = "block";
  loadTodos();
}

function showDelete() {
  hideAll();
  document.getElementById("deleteSection").style.display = "block";
}


const API = "http://localhost:3000/api/todos";

async function createTodo() {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  try {
    const res = await fetch(`${API}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value
      })
    });
    if (res.status !== 201) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to create todo");
    } else {
      alert("Todo created successfully!");
      title.value = "";
      description.value = "";
    }
  }
  catch (error) {
    console.error("Error creating todo:", error);
    return;
  }
}

async function loadTodos() {
  const res = await fetch(`${API}/get`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  });

  const data = await res.json();
  const list = document.getElementById("list");
  data.data.forEach(todo => {
    list.innerHTML += `<li>${todo.title} - ${todo.description}</li>`;
  });
}


async function deleteTodo() {
  const id = document.getElementById("todoId").value;
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });
    if (res.status !== 204) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to delete todo");
    } else {
      alert("Todo deleted successfully!");
      document.getElementById("todoId").value = "";
  
    } 
  }catch (error) {
    console.error("Error deleting todo:", error);
    return;
  }
}