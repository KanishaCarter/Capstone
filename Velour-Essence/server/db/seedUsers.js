import client from './client.js'

async function seedUsers() {
    try {
        await client.connect()
        const SQL = `
        INSERT INTO account(
        username,
        user_password,
        user_email,
        user_first_name,
        user_last_name,
        user_address,
        user_phone_number
        )
        VALUES('kaycee', '!2345678', 'kanishacarter90@outlook.com', 'kanisha', 'carter', '123 Sesame St, Euless, TX, 76040', '817-698-4120'),
        ('ducky698', '!tzducky7', 'daffyduck798@yahoo.com', 'daffy', 'duck', '4500 Cartoons Blvd, Chatanooga, TN, 35698', '621-568-9847'),
        ('lilweezy1', '!@$#jndi0', 'waynezworld678@gmail.com', 'wayne', 'carter', '215 A-Milli St., New Orleans, LA, 50412', '504-631-5261'),
        ('croptopqween', 'IceT901', 'tatyanajackson@gmail.com', 'tatyana', 'jackson', '614 Porter Dr., Memphis, TN, 71548', '698-303-4151'),
        ('julybaby', 'gimme$um', 'ariasmith@yahoo.com', 'aria', 'smith', '5689 Spur 98., Fort Worth, TX, 76045', '968-485-6398'),
        ('crybaby60', 'fhfdkfjkda67#', 'anotherone@gmail.com', 'devante', 'berry', '2965 Southside Rd, Jackson, MS, 39211', '769-990-4876'),
        ('summertimefine', '78394#@%', 'sheistymask78@aol.com', 'deyontae', 'jones', '487 Meadowlane Dr., Milwaukee, WI, 95487', '851-743-3369'),
        ('jennyfromtheblock', '*467^!9002', 'jenniferanderson98@outlook.com', 'jennifer', 'anderson', '69 Private Dr., Bastrop, LA, 42784', '901-741-2154')
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