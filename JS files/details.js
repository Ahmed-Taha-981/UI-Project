let bali = document.getElementById('Bali');
let london = document.getElementById('London');
let paris = document.getElementById('Paris');
let dubai = document.getElementById('Dubai');
let petra = document.getElementById('Petra'); 
let istanbul = document.getElementById('Istanbul');
let mecca = document.getElementById('Mecca'); 
let medina = document.getElementById('Medina');
let canterbury = document.getElementById('Canterbury');
let navbar = document.getElementsByTagName('nav');
let mainToBeDestroyed = document.getElementsByTagName('main');


//       <main>

//         <div class="container">
//     <div class="pic">
//         <img src="Images/WhatsApp Image 2024-11-19 at 23.22.20_bcbb0394.jpg" alt="">
//     </div>
//     <div class="content">
//         <h4>KNOW PARIS</h4>
//         <p>
//             Paris, the "City of Light," is a living monument to history, culture, and art. With its origins dating back to the Roman Empire, the city seamlessly blends ancient heritage with modern vibrancy. Iconic landmarks like the Eiffel Tower, the majestic Notre-Dame Cathedral, and the Louvre Museum offer a window into centuries of architectural brilliance and artistic achievement. Walking along the Seine or exploring the cobbled streets of the Marais district, visitors are transported through time, surrounded by the city's timeless charm and elegance.
//         </p> 
//         <p>
//             Renowned as a global cultural hub, Paris continues to inspire with its unparalleled artistic legacy and vibrant lifestyle. From the bohemian allure of Montmartre to the haute couture of its famed fashion houses, the city radiates creativity and sophistication. Delight in French gastronomy at a bustling café or enjoy a sunset cruise along the Seine, where every view is a postcard moment. Whether exploring world-class museums, strolling through lush gardens, or savoring the romance of its historic streets, Paris promises an unforgettable journey into the heart of history, art, and culture.
//         </p>
//     </div>
//     </div>
//         </main>
     



function createDestination(city) {
    Array.from(mainToBeDestroyed).forEach(element => element.remove());

    let page = document.createElement('main');
    let container = document.createElement('div');
    container.className = 'container';
    let pic = document.createElement('div');
    pic.className = 'pic';
    let img = document.createElement('img');
    img.src = `Images/${city}-des.jpg`;
    let content = document.createElement('div');
    content.className = 'content';
    let h4 = document.createElement('h4');
    h4.textContent = `KNOW ${city.toUpperCase()}`;
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.className = 'dest-paragraph'
    p2.className = 'dest-paragraph'
    page.appendChild(container);
    container.appendChild(pic);
    pic.appendChild(img);
    container.appendChild(content);
    content.appendChild(h4);
    content.appendChild(p1);
    content.appendChild(p2);
    document.body.appendChild(page);
    

    if (city=== "petra"){
        p1.textContent = "Petra, the 'Rose City' is an ancient marvel carved into the sandstone cliffs of southern Jordan. Once a thriving capital of the Nabataean Kingdom, this UNESCO World Heritage Site boasts stunning architecture, including the iconic Treasury(Al-Khazneh) and the Monastery (Ad-Deir). Visitors can explore the intricate network of tombs, temples, and streets that reflect the ingenuity of ancient civilizations and their ability to harmonize with nature. The dramatic Siq, a narrow gorge leading to the Treasury, provides a breathtaking introduction to Petra's wonders."

        p2.textContent = "Beyond its historical significance, Petra enchants with its vibrant culture and natural beauty. By day, the pink and orange hues of the rock formations captivate explorers, while at night, Petra by Candlelight offers a magical ambiance steeped in mystery. Visitors can immerse themselves in Bedouin traditions, sampling local cuisine or enjoying traditional music. Whether you're an adventurer, a history enthusiast, or simply seeking awe-inspiring beauty, Petra offers an unforgettable journey through time."
    }
    else if (city=== "canterbury"){
        p1.textContent ="Canterbury, a charming city in southeast England, is a treasure trove of medieval history and culture. At its heart lies Canterbury Cathedral, a UNESCO World Heritage Site and the seat of the Archbishop of Canterbury, with its stunning Gothic architecture and rich ecclesiastical history. The city gained fame through Geoffrey Chaucer's The Canterbury Tales, drawing pilgrims from around the world to its sacred sites. Walking through the narrow streets reveals well-preserved Tudor buildings, quaint shops, and a timeless charm."
        p2.textContent ="Beyond its historic allure, Canterbury offers a vibrant cultural experience. Visitors can enjoy river tours on the Stour, exploring the city's picturesque waterways, or delve into the mysteries of its Roman past at the Canterbury Roman Museum. The city also hosts a lively arts scene, with theaters and festivals celebrating its literary and cultural heritage. Canterbury's blend of history, beauty, and contemporary culture makes it a must-visit destination for all."
    }
    else if (city=== "dubai"){
        p1.textContent ="Dubai, the jewel of the United Arab Emirates, is a dazzling fusion of innovation, luxury, and tradition. Rising from the Arabian desert, this global metropolis is home to record-breaking landmarks like the Burj Khalifa, the tallest building in the world, and the Palm Jumeirah, an artificial island shaped like a palm tree. Visitors can indulge in world-class shopping at the Dubai Mall, ski indoors at Ski Dubai, or marvel at the Dubai Fountain`s choreographed water displays."
        p2.textContent ="While modernity dominates its skyline, Dubai also honors its heritage with attractions like the Al Fahidi Historical District and the Dubai Museum. Travelers can experience desert safaris, savor Emirati cuisine, or take a traditional dhow cruise along Dubai Creek. From its vibrant nightlife to serene beaches, Dubai is a destination where adventure and luxury converge, offering a unique experience for every traveler."
    }
    else if (city=== "istanbul"){
        p1.textContent ="Istanbul, the city where East meets West, is a vibrant crossroads of history, culture, and tradition. Spanning two continents, this Turkish metropolis boasts a rich heritage that reflects its Roman, Byzantine, and Ottoman legacies. Iconic landmarks like the Hagia Sophia, Blue Mosque, and Topkapi Palace stand as testaments to Istanbul's grandeur and architectural brilliance. The bustling Grand Bazaar and Spice Bazaar add a sensory feast to the city's dynamic charm"
        p2.textContent ="Beyond its historical sites, Istanbul pulsates with modern energy. Visitors can take a scenic Bosphorus cruise, savor delectable Turkish cuisine, or unwind in a traditional hammam. Neighborhoods like Beyoğlu and Kadköy offer a vibrant arts and nightlife scene, blending the old with the new. Whether exploring ancient treasures or soaking in the cosmopolitan vibe, Istanbul offers an unforgettable experience steeped in diversity and beauty."
    }
    else if (city=== "paris"){
        p1.textContent ="Paris, the 'City of Light' is a timeless beacon of history, culture, and art. Iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum draw millions of visitors each year, offering a glimpse into the city's storied past and artistic brilliance. Strolling along the Seine or exploring the historic Marais district, travelers are immersed in a world where history and romance blend seamlessly."
        p2.textContent ="Beyond its historic allure, Paris is a cultural epicenter known for its fashion, gastronomy, and vibrant arts scene. The bohemian spirit of Montmartre, the opulence of Versailles, and the chic elegance of its fashion houses create a city full of contrasts and inspiration. Whether savoring a croissant at a riverside café or marveling at masterpieces in world-class museums, Paris promises a journey filled with unforgettable moments and enduring charm"
    }
    else if (city=== "london"){
        p1.textContent ="London, the vibrant capital of the United Kingdom, is a city where history and modernity coexist in perfect harmony. Iconic landmarks like Buckingham Palace, the Tower of London, and Big Ben draw millions of visitors eager to explore its royal and historical heritage. The British Museum, National Gallery, and Tate Modern house some of the world's most treasured art and artifacts, showcasing London's global cultural influence."
        p2.textContent ="Beyond its storied past, London thrives as a modern metropolis brimming with diversity. Stroll through the bustling streets of Soho, savor culinary delights in Borough Market, or take in a performance at the West End. With its lush parks, world-class shopping, and lively neighborhoods like Camden and Shoreditch, London offers endless opportunities for exploration and inspiration."
    }
    else if (city=== "medina"){
        p1.textContent ="Medina, the radiant city in Saudi Arabia, holds profound spiritual significance as the resting place of the Prophet Muhammad. The Prophet's Mosque (Al-Masjid an-Nabawi), with its striking green dome, stands at the heart of the city, drawing millions of pilgrims each year. Steeped in Islamic history, Medina offers visitors a chance to connect deeply with their faith and explore historic sites like Quba Mosque, the first mosque in Islam."
        p2.textContent ="Beyond its sacred sites, Medina provides a serene and welcoming atmosphere. Visitors can stroll through bustling markets, sample local delicacies, or enjoy the tranquility of the city's lush gardens. With its deep spiritual resonance and cultural richness, Medina offers a meaningful and enriching experience for travelers from all walks of life."
    }
    else if (city=== "mecca"){
        p1.textContent ="Mecca, the holiest city in Islam, is a spiritual beacon for millions of Muslims worldwide. Home to the sacred Kaaba within the Grand Mosque (Masjid al-Haram), it is the ultimate destination for Hajj and Umrah pilgrimages. The city's rich history as the birthplace of the Prophet Muhammad adds to its profound significance, making it a deeply transformative experience for those who visit."
        p2.textContent ="While steeped in spiritual heritage, Mecca also showcases modern infrastructure designed to accommodate its global visitors. From the towering Abraj Al Bait complex to the serene hills of Jabal Al-Noor, Mecca offers a unique blend of tradition and progress. For those privileged to undertake the journey, Mecca provides a sacred connection and lasting memories of devotion and unity."
    }
    else if (city=== "bali"){
        p1.textContent ="Bali, the 'Island of the Gods' is a tropical paradise renowned for its natural beauty, spirituality, and vibrant culture. With its lush rice terraces, volcanic landscapes, and pristine beaches, Bali offers a stunning escape into nature. The island is also home to sacred temples like Uluwatu and Tanah Lot, which exude serenity and showcase the island's rich Hindu heritage."
        p2.textContent ="Beyond its scenic wonders, Bali captivates with its lively arts and traditions. Visitors can partake in yoga retreats, witness colorful ceremonies, or explore bustling markets offering handmade crafts. Whether seeking adventure, relaxation, or a cultural immersion, Bali provides a harmonious blend of experiences, making it a dream destination for travelers worldwide."
    }
    navbar[0].after(page);

}
bali.addEventListener('click', () => createDestination("bali"));
istanbul.addEventListener('click', () => createDestination("istanbul"));
london.addEventListener('click', () => createDestination("london"));
medina.addEventListener('click', () => createDestination("medina"));
mecca.addEventListener('click', () => createDestination("mecca"));
paris.addEventListener('click', () => createDestination("paris"));
canterbury.addEventListener('click', () => createDestination("canterbury"));
dubai.addEventListener('click', () => createDestination("dubai"));
petra.addEventListener('click', () => createDestination("petra"));
