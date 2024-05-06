        const form = document.querySelector('form');
        const errorMessage = document.querySelector('#error-message');
    
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
    
          const response = await fetch('/validar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              correo: document.querySelector('#correo').value,
              contraseña: document.querySelector('#contraseña').value
            })
          });
    
          const data = await response.json();
    
          if (data.error) {
            errorMessage.innerHTML = `<p>${data.error}</p>`;
            const backLink = document.createElement('a');
            backLink.textContent = 'Reintentar';
            backLink.href = '#'; 
            backLink.style.color= 'red';
            backLink.addEventListener('click', () => {
                window.location.reload(); 
            });
            errorMessage.appendChild(backLink);
          } else {
            errorMessage.textContent = '';
          }
        });