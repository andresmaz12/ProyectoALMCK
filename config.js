//Codigo principal
// js/config.js
export const config = {
    // ⚠️ REEMPLAZA con tus credenciales REALES de Supabase
    supabaseUrl: 'https://sqayferuxbakznaoxgte.supabase.co',  // Tu URL exacta
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxYXlmZXJ1eGJha3puYW94Z3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MjQ1OTAsImV4cCI6MjA5MDUwMDU5MH0.2dJOhq2a6cvX_8Fv9cbGuX64yhvtq6SuQvYI-KqRqvU',  // Tu key completa
    
    getBaseUrl: () => window.location.origin
};

export function isValidEnvironment() {
    const protocol = window.location.protocol;
    
    if (protocol === 'file:') {
        console.error('❌ ERROR: Archivo abierto directamente');
        alert('⚠️ Error: Debes usar Live Server o un servidor local.\n\nHaz clic derecho en el archivo HTML y selecciona "Open with Live Server"');
        return false;
    }
    
    return true;
}