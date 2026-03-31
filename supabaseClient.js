// js/supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/+esm'

// ⚠️ REEMPLAZA con tus credenciales de Supabase
const SUPABASE_URL = 'https://mretyvuvhruizylrkbhe.supabase.co'  // Tu URL aquí
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yZXR5dnV2aHJ1aXp5bHJrYmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MDk2NjIsImV4cCI6MjA5MDQ4NTY2Mn0.tPvZHiNQ2aG_rZdmXoCetvAgutGzN2A1YJI4viRh-dk'  // Tu key aquí

// Crear cliente con el schema Inventario y opciones adicionales
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  db: {
    schema: 'Inventario'
  },
  auth: {
    persistSession: false  // Para evitar problemas de autenticación
  }
})

// Función de prueba para verificar conexión
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('productos')
      .select('count', { count: 'exact', head: true })
    
    if (error) {
      console.error('❌ Error de conexión con Supabase:', error)
      return false
    }
    console.log('✅ Conexión exitosa con Supabase')
    return true
  } catch (error) {
    console.error('❌ Error de conexión:', error)
    return false
  }
}