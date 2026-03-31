// supabaseClient.js (en la raíz)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/+esm'
import { config } from './config.js'

export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey, {
    db: {
        schema: 'inventario'
    }
});

// ESTA ES LA FUNCIÓN QUE TE FALTA EXPORTAR:
export async function testSupabaseConnection() {
    try {
        const { data, error } = await supabase.from('productos').select('*').limit(1);
        if (error) {
            console.error('Error de Supabase:', error.message);
            return false;
        }
        return true;
    } catch (err) {
        console.error('Error de red/conexión:', err);
        return false;
    }
}