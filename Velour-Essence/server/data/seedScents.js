import client from './client.js'

async function seedScents() {
    try {
        await client.connect()
        const SQL = `
        INSERT INTO scents(
        scent_designer, 
        scent_name,
        scent_size,
        scent_price,
        scent_details
        )
        VALUES('Maison Flora', 'Rose Blossom', 2.0, 49.99, 'Rose, soft floral'),
        ('Sweet Aroma', 'Vanilla Dream', 2.0, 39.99, 'Vanilla, sweet gourmand'),
        ('Bloom & Co', 'Jasmine Breeze', 2.0, 44.99, 'Jasmine, fresh floral'),
        ('Luma Perfumes', 'Citrus Glow', 2.0, 34.99, 'Lemon, bergamot, bright'),
        ('Noir Essence', 'Midnight Oud', 2.0, 59.99, 'Oud, smoky, woody'),
        ('Provence Scents', 'Lavender Field', 2.0, 42.50, 'Lavender, calming floral'),
        ('Amber & Co', 'Amber Mystique', 2.0, 54.99, 'Amber, warm resinous'),
        ('Aqua Perfumes', 'Ocean Mist', 2.0, 37.99, 'Sea breeze, aquatic'),
        ('Bloom & Co', 'Peony Whisper', 2.0, 41.99, 'Peony, soft floral'),
        ('Wood & Bloom', 'Sandalwood Secrets', 2.0, 52.99, 'Sandalwood, creamy wood'),
        ('Maison Flora', 'Gardenia Glow', 2.0, 45.00, 'Gardenia, sweet floral'),
        ('Noir Essence', 'Patchouli Nights', 2.0, 49.50, 'Patchouli, earthy, deep'),
        ('Sweet Aroma', 'Vanilla Orchid', 2.0, 39.50, 'Vanilla, orchid floral'),
        ('Luma Perfumes', 'Bergamot Sunrise', 2.0, 36.99, 'Bergamot, fresh citrus'),
        ('Noir Essence', 'Blackcurrant Velvet',2.0, 48.00, 'Blackcurrant, fruity'),
        ('Pure Scents',	'White Musk',2.0, 33.99, 'Musk, clean, soft'),
        ('Bloom & Co', 'Pink Magnolia',2.0, 42.99, 'Magnolia, soft floral'),
        ('Spice & Soul', 'Cinnamon Spice',2.0, 46.99, 'Cinnamon, warm spicy'),
        ('Maison Flora', 'Neroli Bloom',2.0, 44.50, 'Neroli, orange blossom'),
        ('Amber & Co',	'Amber Vanilla',2.0,	50.00,	'Amber, vanilla gourmand'),
        ('Noir Essence',	'Jasmine Noir',2.0,	49.99,	'Jasmine, deep floral'),
        ('Sweet Aroma',	'Exotic Orchid',2.0,	52.50,	'Orchid, exotic floral'),
        ('Luma Perfumes',	'Lemon Verbena',2.0,	34.50,	'Lemon, green citrus'),
        ('Noir Essence',	'Rose Oud',2.0,	57.99,	'Rose, oud woody'),
        ('Sweet Aroma',	'Vanilla Chai',	2.0,40.99,	'Vanilla, spicy chai'),
        ('Bloom & Co',	'White Jasmine',2.0,	43.50,	'Jasmine, fresh floral'),
        ('Amber & Co',	'Amber Woods',2.0,	53.99,	'Amber, cedar, woody'),
        ('Luma Perfumes',	'Ci,trus Blossom',2.0,	38.99,	'Orange blossom, citrus'),
        ('Bloom & Co',	'Peony & Pear',2.0,	42.00,	'Peony, pear fruity'),
        ('Noir Essence',	'Musk Noir',2.0,	49.50,	'Musk, dark sensual'),
        ('Bloom & Co',	'Violet Mist',2.0,	41.50,	'Violet, soft floral'),
        ('Wood & Bloom',	'Sandalwood Rose',2.0,	55.00,	'Sandalwood, rose woody'),
        ('Maison Flora',	'Neroli Nights',2.0,	47.50,	'Neroli, evening floral'),
        ('Sweet Aroma',	'Vanilla Lace',2.0,	39.99,	'Vanilla, soft sweet'),
        ('Luma Perfumes',	'Bergamot Bloom',2.0,	37.50,	'Bergamot, citrus floral'),
        ('Amber & Co',	'Black Amber',2.0,	54.99,	'Amber, dark resinous'),
        ('Bloom & Co', 'Jasmine & Lily',2.0,	46.50,	'Jasmine, lily floral'),
        ('Noir Essence',	'Citrus Oud',2.0,	56.99,	'Citrus, oud woody'),
        ('Maison Flora',	'Rose Petals',2.0,	44.00,	'Rose, gentle floral'),
        ('Sweet Aroma',	'Vanilla Sky',2.0,	40.50,	'Vanilla, soft gourmand'),
        ('Maison Flora',	'Gardenia Nights',2.0,	48.50,	'Gardenia, deep floral'),
        ('Noir Essence',	'Patchouli Blossom',2.0,	49.99,	'Patchouli, floral earthy'),
        ('Luma Perfumes',	'Lemon Blossom',2.0,	35.5,	'Lemon, floral citrus'),
        ('Bloom & Co',	'Pink Rose',2.0,	43.00,	'Rose, delicate floral'),
        ('Amber & Co',	'Amber Spice',2.0,	51.50,	'Amber, spicy warm'),
        ('Sweet Aroma',	'White Orchid',2.0,	45.50,	'Orchid, soft floral'),
        ('Luma Perfumes',	'Citrus Harmony',2.0,	36.99,	'Citrus blend, fresh'),
        ('Bloom & Co',	'Jasmine & Rose',2.0,	47.99,	'Jasmine, rose floral'),
        ('Sweet Aroma',	'Vanilla Musk',2.0,	42.50,	'Vanilla, musk soft'),
        ('Noir Essence', 'Oud Mystique',2.0,	59.50,	'Oud, deep woody');
        `
        const result = await client.query(SQL);
        console.log('Database seeded.');
    } catch(err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

seedScents()