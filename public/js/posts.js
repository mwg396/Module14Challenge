const postFormHandler = async (event) => {
  
    event.preventDefault();
  
    
    const blogTitle = document.querySelector('#blogTitle').value.trim();
    const blogContent = document.querySelector('#blogContent').value.trim();
  
    if (title && body) {
     
      const response = await fetch('/api/blogposts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location='/'
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', postFormHandler);