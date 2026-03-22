database structure:

pages
    id, slug, title, published, created_at

sections
    id, page_id, order, type, content (jsonb)

site_config
    id (always 1 row), fonts (jsonb), colors (jsonb), spacing (text)
