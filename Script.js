const supabaseUrl = 'https://opxxzfvyplqdncadcwoe.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Example of interacting with Supabase
async function fetchData() {
    const { data, error } = await supabase
        .from('users')
        .select('*');
    console.log(data);
}

fetchData();
