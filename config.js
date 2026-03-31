//Codigo principal
// js/config.js
export const config = {
    // ⚠️ REEMPLAZA con tus credenciales REALES de Supabase
    supabaseUrl: 'https://mretyvuvhruizylrkbhe.supabase.co',  // Tu URL exacta
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yZXR5dnV2aHJ1aXp5bHJrYmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MDk2NjIsImV4cCI6MjA5MDQ4NTY2Mn0.tPvZHiNQ2aG_rZdmXoCetvAgutGzN2A1YJI4viRh-dk',  // Tu key completa
    
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