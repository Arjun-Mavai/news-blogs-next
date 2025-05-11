export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      about_section: {
        Row: {
          content: string | null
          id: number
          image_url: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Relationships: []
      }
      articles: {
        Row: {
          cat_slug: string | null
          category_id: number | null
          content: string
          created_at: string | null
          description: string
          id: number
          images: string[]
          likes: number
          read_time: number
          slug: string
          title: string
          updated_at: string | null
          views: number
        }
        Insert: {
          cat_slug?: string | null
          category_id?: number | null
          content: string
          created_at?: string | null
          description: string
          id?: number
          images?: string[]
          likes?: number
          read_time?: number
          slug: string
          title: string
          updated_at?: string | null
          views?: number
        }
        Update: {
          cat_slug?: string | null
          category_id?: number | null
          content?: string
          created_at?: string | null
          description?: string
          id?: number
          images?: string[]
          likes?: number
          read_time?: number
          slug?: string
          title?: string
          updated_at?: string | null
          views?: number
        }
        Relationships: [
          {
            foreignKeyName: "articles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categoriesn"
            referencedColumns: ["id"]
          },
        ]
      }
      blogs: {
        Row: {
          content: string | null
          created_at: string
          id: number
          reading_time: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          reading_time?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          reading_time?: string | null
          title?: string | null
        }
        Relationships: []
      }
      books: {
        Row: {
          content: string
          created_at: string | null
          expiry: string
          id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          expiry: string
          id?: string
        }
        Update: {
          content?: string
          created_at?: string | null
          expiry?: string
          id?: string
        }
        Relationships: []
      }
      cards: {
        Row: {
          created_at: string
          description: string
          id: string
          image_url: string
          likes: number | null
          title: string
          views: number | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image_url: string
          likes?: number | null
          title: string
          views?: number | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image_url?: string
          likes?: number | null
          title?: string
          views?: number | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string | null
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      categoriesn: {
        Row: {
          id: number
          name: string
          slug: string
        }
        Insert: {
          id?: never
          name: string
          slug: string
        }
        Update: {
          id?: never
          name?: string
          slug?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          blog_id: number | null
          comment: string | null
          created_at: string
          id: number
        }
        Insert: {
          blog_id?: number | null
          comment?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          blog_id?: number | null
          comment?: string | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "comments_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      footer: {
        Row: {
          copyright_text: string | null
          id: number
          social_links: Json | null
        }
        Insert: {
          copyright_text?: string | null
          id?: number
          social_links?: Json | null
        }
        Update: {
          copyright_text?: string | null
          id?: number
          social_links?: Json | null
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          multiple_image_urls: string[] | null
          single_image_url: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          multiple_image_urls?: string[] | null
          single_image_url?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          multiple_image_urls?: string[] | null
          single_image_url?: string | null
          title?: string
        }
        Relationships: []
      }
      header: {
        Row: {
          id: number
          logo_url: string | null
          nav_items: Json | null
        }
        Insert: {
          id?: number
          logo_url?: string | null
          nav_items?: Json | null
        }
        Update: {
          id?: number
          logo_url?: string | null
          nav_items?: Json | null
        }
        Relationships: []
      }
      hero_section: {
        Row: {
          background_image_url: string | null
          cta_link: string | null
          cta_text: string | null
          id: number
          subtitle: string | null
          title: string | null
        }
        Insert: {
          background_image_url?: string | null
          cta_link?: string | null
          cta_text?: string | null
          id?: number
          subtitle?: string | null
          title?: string | null
        }
        Update: {
          background_image_url?: string | null
          cta_link?: string | null
          cta_text?: string | null
          id?: number
          subtitle?: string | null
          title?: string | null
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          url: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          url: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          url?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          blog_id: number | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
      mid_section: {
        Row: {
          content: string | null
          id: number
          image_url: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Relationships: []
      }
      new_notes: {
        Row: {
          category_id: string | null
          content: string
          created_at: string | null
          expiry: string | null
          id: string
          images: string[] | null
          is_deleted: boolean | null
          premium: boolean | null
          title: string
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          content: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          content?: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "new_notes_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      new_notes_duplicate: {
        Row: {
          category_id: string | null
          content: string
          created_at: string | null
          expiry: string | null
          id: string
          images: string[] | null
          is_deleted: boolean | null
          premium: boolean | null
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          content: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          content?: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "new_notes_duplicate_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      new_table: {
        Row: {
          category_id: string | null
          content: string
          created_at: string | null
          expiry: string | null
          id: number
          images: string[] | null
          is_deleted: boolean | null
          premium: boolean | null
          title: string
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          content: string
          created_at?: string | null
          expiry?: string | null
          id?: number
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          content?: string
          created_at?: string | null
          expiry?: string | null
          id?: number
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "new_table_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          content: string | null
          created_at: string
          expiry: string | null
          id: number
        }
        Insert: {
          content?: string | null
          created_at?: string
          expiry?: string | null
          id?: number
        }
        Update: {
          content?: string | null
          created_at?: string
          expiry?: string | null
          id?: number
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string | null
          features: Json
          gallery_images: Json
          id: string
          model_name: string
          showcase_images: Json
          tech_specs: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          features: Json
          gallery_images: Json
          id?: string
          model_name: string
          showcase_images: Json
          tech_specs: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          features?: Json
          gallery_images?: Json
          id?: string
          model_name?: string
          showcase_images?: Json
          tech_specs?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
        }
        Relationships: []
      }
      register: {
        Row: {
          created_at: string | null
          email: string
          id: number
          name: string
          password: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          name: string
          password: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          name?: string
          password?: string
        }
        Relationships: []
      }
      room_details: {
        Row: {
          amenities: Json
          created_at: string
          id: string
          main_images: string[]
          room_id: string | null
          section_images: Json
          specifications: Json
          updated_at: string
        }
        Insert: {
          amenities?: Json
          created_at?: string
          id?: string
          main_images?: string[]
          room_id?: string | null
          section_images?: Json
          specifications?: Json
          updated_at?: string
        }
        Update: {
          amenities?: Json
          created_at?: string
          id?: string
          main_images?: string[]
          room_id?: string | null
          section_images?: Json
          specifications?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "room_details_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          base_price: number
          created_at: string
          id: string
          name: string
          room_number: string
          section_id: string | null
          status: Database["public"]["Enums"]["room_status"] | null
          updated_at: string
        }
        Insert: {
          base_price: number
          created_at?: string
          id?: string
          name: string
          room_number: string
          section_id?: string | null
          status?: Database["public"]["Enums"]["room_status"] | null
          updated_at?: string
        }
        Update: {
          base_price?: number
          created_at?: string
          id?: string
          name?: string
          room_number?: string
          section_id?: string | null
          status?: Database["public"]["Enums"]["room_status"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rooms_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
        ]
      }
      rotations: {
        Row: {
          channel_id: string | null
          contact_method: string
          contact_method_text: string | null
          created_at: string | null
          current_user: string | null
          end_date: string | null
          frequency: string
          id: number
          next_end: string | null
          next_start: string | null
          next_user: string | null
          rotation_day: string
          rotation_hour: string
          start_date: string | null
          timezone: string
          users: Json
        }
        Insert: {
          channel_id?: string | null
          contact_method: string
          contact_method_text?: string | null
          created_at?: string | null
          current_user?: string | null
          end_date?: string | null
          frequency: string
          id?: never
          next_end?: string | null
          next_start?: string | null
          next_user?: string | null
          rotation_day: string
          rotation_hour: string
          start_date?: string | null
          timezone: string
          users: Json
        }
        Update: {
          channel_id?: string | null
          contact_method?: string
          contact_method_text?: string | null
          created_at?: string | null
          current_user?: string | null
          end_date?: string | null
          frequency?: string
          id?: never
          next_end?: string | null
          next_start?: string | null
          next_user?: string | null
          rotation_day?: string
          rotation_hour?: string
          start_date?: string | null
          timezone?: string
          users?: Json
        }
        Relationships: []
      }
      sections: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          content: string | null
          id: number
          image_url: string | null
          name: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Relationships: []
      }
      user_selections: {
        Row: {
          id: string
          room_id: string | null
          section_id: string | null
          selected_at: string
          user_id: string
        }
        Insert: {
          id?: string
          room_id?: string | null
          section_id?: string | null
          selected_at?: string
          user_id: string
        }
        Update: {
          id?: string
          room_id?: string | null
          section_id?: string | null
          selected_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_selections_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_selections_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
        ]
      }
      views: {
        Row: {
          blog_id: number | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "views_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      room_status: "available" | "occupied" | "maintenance"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      room_status: ["available", "occupied", "maintenance"],
    },
  },
} as const
