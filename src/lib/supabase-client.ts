// // lib/supabaseClient.js
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = "https://npnjzfmywierjpxbnehw.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbmp6Zm15d2llcmpweGJuZWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NjIyMjQsImV4cCI6MjAzOTMzODIyNH0.4QvjXHXYp2A7S66zNn0otLLSucHMdxz6m4UyHHiT56k"
// export const supabase = createClient(supabaseUrl, supabaseKey);



import { createClient } from '@supabase/supabase-js';
import { Database } from '../../database.types';
 
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export async function getCategories() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
     
  
  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
  
  return data || [];
}

// export async function getArticles() {
//   const { data, error } = await supabase
//     .from('articles')
//     .select(`
//       *,
//       categories:category_id(id, name, slug)
//     `)
//     .order('created_at', { ascending: false });
  
//   if (error) {
//     console.error('Error fetching articles:', error);
//     return [];
//   }
  
//   return data || [];
// }



export const getArticles = async (categorySlug?: string | null) => {
    let query = supabase.from('articles').select('*').order('created_at', { ascending: false })
  
    if (categorySlug) {
      query = query.eq('cat_slug', categorySlug)
    }
  
    const { data, error } = await query
  
    if (error) throw new Error(error.message)
    return data || []
  }

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from('articles')
    .select(`
      *,
      categories:category_id(id, name, slug)
    `)
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }
  
  return data;
}

// export async function incrementArticleViews(id: number) {
//   const { error } = await supabase.rpc('increment_article_views', { article_id: id });
  
//   if (error) {
//     console.error('Error incrementing views:', error);
//   }
// }

// export async function toggleArticleLike(id: number) {
//   const { error } = await supabase.rpc('toggle_article_like', { article_id: id });
  
//   if (error) {
//     console.error('Error toggling like:', error);
//   }
// }

export async function getAllArticleSlugs() {
  const { data, error } = await supabase
    .from('articles')
    .select('slug');
  
  if (error) {
    console.error('Error fetching article slugs:', error);
    return [];
  }
  
  return data || [];
}