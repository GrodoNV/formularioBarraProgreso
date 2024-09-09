document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const progressBar = document.getElementById('progressBar');
    
    // Función para calcular el progreso
    function updateProgress() {
        const totalFields = 5; // Número total de campos requeridos
        let filledFields = 0;
        
        // Nombre
        if (form.name.value.trim() !== '') filledFields++;
        
        // Correo Electrónico (validar si el valor cumple con una expresión regular simple)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(form.email.value.trim())) filledFields++;
        
        // Género (validar si se ha seleccionado una opción)
        if (form.gender.value !== '') filledFields++;
        
        // Intereses (contar al menos un checkbox marcado)
        const checkboxes = form.querySelectorAll('input[name="interests"]:checked');
        if (checkboxes.length > 0) filledFields++;
        
        // Nivel de Satisfacción (validar si se ha seleccionado una opción)
        if (form.satisfaction.value !== '') filledFields++;
        
        // Calcular porcentaje de progreso
        const progressPercentage = (filledFields / totalFields) * 100;
        progressBar.style.width = progressPercentage + '%';
    }
    
    // Añadir eventos para actualizar la barra de progreso
    form.addEventListener('input', updateProgress);
    form.addEventListener('change', updateProgress);
    
    // Inicializar el progreso al cargar la página
    updateProgress();
});
