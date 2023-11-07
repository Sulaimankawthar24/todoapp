const DB_NAME = "todo_db";

const todo_db = getDb("todo_db");
  const currentPreviewId = getDb("current_preview_todo_id");
  const currentTodo = todo_db.find((todo) => todo.id === currentPreviewId);
  const { title, created_at, id } = currentTodo;

const renderCurrentPreviewTodoId = () => {
  const preview_container = document.getElementById("preview-container");
  preview_container.innerHTML = `
  <a href="/index.html" class="inline-flex flex items-center gap-2 text-green-500 hover:text-black">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
  >
      <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
  </svg>

  <span class="text-sm">Go to Todo page</span>
  </a>

  <section class="flex justify-between">
  <h3 class="text-xl font-semibold break-all">${title}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 text-green-500 hover:text-black cursor-pointer"
      onclick="edit_mode_()"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
</section>
<section class="mt-3">
  <span class="text-sm">Created on</span>
  <span class="text-sm">${created_at}</span>
  <span class="bg-red-300 text-sm px-1 py-0.5 rounded-lg text-white">Pending</span>
</section>`;
};


// Sweetalert modal
async function edit_mode_() {
  const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Message",
    inputPlaceholder: "Type your message here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });
  if (text) {
    Swal.fire(text);
  }
      
}

renderCurrentPreviewTodoId();