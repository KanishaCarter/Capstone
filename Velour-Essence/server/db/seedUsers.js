import client from './client.js'

async function seedUsers() {
    try {
        await client.connect()
        const SQL = `
        INSERT INTO account(
        username,
        user_password,
        user_first_name,
        user_last_name,
        user_address,
        user_phone_number
        )
        VALUES('kaycee', '!2345678','kanisha', 'carter', '123 Sesame St, Euless, TX, 76040', '817-698-4120'),
        ('ducky698', '!tzducky7', 'daffy', 'duck', '4500 Cartoons Blvd, Chatanooga, TN, 35698', '621-568-9847'),
        ('lilweezy1', '!@$#jndi0', 'wayne', 'carter', '215 A-Milli St., New Orleans, LA, 50412', '504-631-5261'),
        ('croptopqween', 'IceT901', 'tatyana', 'jackson', '614 Porter Dr., Memphis, TN, 71548', '698-303-4151'),
        ('julybaby', 'gimme$um', 'aria', 'smith', '5689 Spur 98., Fort Worth, TX, 76045', '968-485-6398'),
        ('bigdaddy90', 'fhfdkfjkda67#', 'devante', 'berry', '2965 Southside Rd, Jackson, MS, 39211', '769-990-4876'),
        ('summertimefine', '78394#@%', 'deyontae', 'jones', '487 Meadowlane Dr., Milwaukee, WI, 95487', '851-743-3369'),
        ('jennyfromtheblock', '*467^!9002', 'jennifer', 'anderson', '69 Private Dr., Bastrop, LA, 42784', '901-741-2154')
        `
        const result = await client.query(SQL);
        console.log('Database seeded.');
    } catch(err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

seedUsers()