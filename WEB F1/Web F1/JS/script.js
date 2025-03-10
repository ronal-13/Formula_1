document.addEventListener("DOMContentLoaded", function () {
    console.log("F1 Website Loaded");

    // Navbar link highlighting
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

//PARA EL SCHEDULE ============================================================================================================================================================================================================================================0

document.addEventListener("DOMContentLoaded", function () {
    const raceData = [
        { round: "ROUND1", date: "14-16", month: "MAR", country: "Australia", imgFlag: "/Web F1/images/race/countries/australia-flag.avif", imgRace: "/Web F1/images/race/Australia carbon.avif", title: "FORMULA 1 AUSTRALIAN GP" },
        { round: "ROUND2", date: "21-23", month: "MAR", country: "Arabia Saudita", imgFlag: "/Web F1/images/race/countries/saudi-arabia-flag.avif", imgRace: "/Web F1/images/race/Saudi Arabia carbon.avif", title: "FORMULA 1 SAUDI ARABIAN GP" },
        { round: "ROUND3", date: "05-07", month: "ABR", country: "Japón", imgFlag: "/Web F1/images/race/countries/japan-flag.avif", imgRace: "/Web F1/images/race/Japan carbon.avif", title: "FORMULA 1 JAPANESE GP" },
        { round: "ROUND4", date: "19-21", month: "ABR", country: "China", imgFlag: "/Web F1/images/race/countries/china-flag.avif", imgRace: "/Web F1/images/race/China carbon.avif", title: "FORMULA 1 CHINESE GP" },
        { round: "ROUND5", date: "03-05", month: "MAY", country: "Miami", imgFlag: "/Web F1/images/race/countries/usa-flag.avif", imgRace: "/Web F1/images/race/Miami carbon.avif", title: "FORMULA 1 MIAMI GP" },
        { round: "ROUND6", date: "17-19", month: "MAY", country: "Italia", imgFlag: "/Web F1/images/race/countries/italy-flag.avif", imgRace: "/Web F1/images/race/Emilia-Romagna carbon.avif", title: "FORMULA 1 EMILIA ROMAGNA GP" },
        { round: "ROUND7", date: "24-26", month: "MAY", country: "Mónaco", imgFlag: "/Web F1/images/race/countries/monaco-flag.avif", imgRace: "/Web F1/images/race/Monaco carbon.avif", title: "FORMULA 1 MONACO GP" },
        { round: "ROUND8", date: "07-09", month: "JUN", country: "Canadá", imgFlag: "/Web F1/images/race/countries/canada-flag.avif", imgRace: "/Web F1/images/race/Canada carbon.avif", title: "FORMULA 1 CANADIAN GP" },
        { round: "ROUND9", date: "21-23", month: "JUN", country: "España", imgFlag: "/Web F1/images/race/countries/spain-flag.avif", imgRace: "/Web F1/images/race/Spain carbon.avif", title: "FORMULA 1 SPANISH GP" },
        { round: "ROUND10", date: "28-30", month: "JUN", country: "Austria", imgFlag: "/Web F1/images/race/countries/austria-flag.avif", imgRace: "/Web F1/images/race/Austria carbon.avif", title: "FORMULA 1 AUSTRIAN GP" },
        { round: "ROUND11", date: "05-07", month: "JUL", country: "Reino Unido", imgFlag: "/Web F1/images/race/countries/uk-flag.avif", imgRace: "/Web F1/images/race/Silverstone carbon.avif", title: "FORMULA 1 BRITISH GP" },
        { round: "ROUND12", date: "19-21", month: "JUL", country: "Hungría", imgFlag: "/Web F1/images/race/countries/hungary-flag.avif", imgRace: "/Web F1/images/race/Hungary carbon.avif", title: "FORMULA 1 HUNGARIAN GP" },
        { round: "ROUND13", date: "26-28", month: "JUL", country: "Bélgica", imgFlag: "/Web F1/images/race/countries/belgium-flag.avif", imgRace: "/Web F1/images/race/Belgium carbon.avif", title: "FORMULA 1 BELGIAN GP" },
        { round: "ROUND14", date: "23-25", month: "AGO", country: "Países Bajos", imgFlag: "/Web F1/images/race/countries/netherlands-flag.avif", imgRace: "/Web F1/images/race/Netherlands carbon.avif", title: "FORMULA 1 DUTCH GP" },
        { round: "ROUND15", date: "30-01", month: "SEP", country: "Italia", imgFlag: "/Web F1/images/race/countries/italy-flag.avif", imgRace: "/Web F1/images/race/italy carbon.avif", title: "FORMULA 1 ITALIAN GP" },
        { round: "ROUND16", date: "13-15", month: "SEP", country: "Azerbaiyán", imgFlag: "/Web F1/images/race/countries/azerbaijan-flag.avif", imgRace: "/Web F1/images/race/Azerbaijan carbon.avif", title: "FORMULA 1 AZERBAIJAN GP" },
        { round: "ROUND17", date: "20-22", month: "SEP", country: "Singapur", imgFlag: "/Web F1/images/race/countries/singapore-flag.avif", imgRace: "/Web F1/images/race/Singapore carbon.avif", title: "FORMULA 1 SINGAPORE GP" },
        { round: "ROUND18", date: "04-06", month: "OCT", country: "Estados Unidos", imgFlag: "/Web F1/images/race/countries/usa-flag.avif", imgRace: "/Web F1/images/race/United States carbon.avif", title: "FORMULA 1 UNITED STATES GP" },
        { round: "ROUND19", date: "18-20", month: "OCT", country: "México", imgFlag: "/Web F1/images/race/countries/mexico-flag.avif", imgRace: "/Web F1/images/race/Mexico carbon.avif", title: "FORMULA 1 MEXICAN GP" },
        { round: "ROUND20", date: "25-27", month: "OCT", country: "Brasil", imgFlag: "/Web F1/images/race/countries/brazil-flag.avif", imgRace: "/Web F1/images/race/Brazil carbon.avif", title: "FORMULA 1 BRAZILIAN GP" },
        { round: "ROUND21", date: "01-03", month: "NOV", country: "Las Vegas", imgFlag: "/Web F1/images/race/countries/usa-flag.avif", imgRace: "/Web F1/images/race/Las Vegas carbon.avif", title: "FORMULA 1 LAS VEGAS GP" },
        { round: "ROUND22", date: "15-17", month: "NOV", country: "Qatar", imgFlag: "/Web F1/images/race/countries/qatar-flag.avif", imgRace: "/Web F1/images/race/Qatar carbon.avif", title: "FORMULA 1 QATAR GP" },
        { round: "ROUND23", date: "22-24", month: "NOV", country: "Arabia Saudita", imgFlag: "/Web F1/images/race/countries/saudi-arabia-flag.avif", imgRace: "/Web F1/images/race/Saudi Arabia carbon.avif", title: "FORMULA 1 SAUDI ARABIAN GP" },
        { round: "ROUND24", date: "06-08", month: "DIC", country: "Abu Dhabi", imgFlag: "/Web F1/images/race/countries/uae-flag.avif", imgRace: "/Web F1/images/race/Abu Dhabi carbon.avif", title: "FORMULA 1 ABU DHABI GP" }
    ];
    

    const raceGrid = document.getElementById("raceGrid");
    raceData.forEach(race => {
        const raceDiv = document.createElement("div");
        raceDiv.classList.add("race-card");
    
        raceDiv.innerHTML = `
            <div class="round">${race.round}</div>
            <div class="dia">${race.date}</div>
            <div class="mes">${race.month} 
                <img class="Flag" src="${race.imgFlag}" alt="${race.country} Flag">
            </div>
            <div class="linea-separadora0"></div>
            <div class="titulo">
                ${race.country} <span class="flecha"></span>
            </div>
            <div class="text">${race.title}</div>
            <div class="linea-separadora1"></div>
            <img class="race" src="${race.imgRace}" alt="${race.country} GP">
        `;
    
        raceGrid.appendChild(raceDiv);
    });
    
});

//PARA EL DRIVERS==========================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
    const drivers = [
        { firstName: "MAX", lastName: "VERSTAPPEN", flag: "/Web F1/images/race/countries/netherlands-flag.avif", team: "Red Bull Racing", img: "/Web F1/images/Drivers/versttapen.avif", color: "#1E41FF" },
        { firstName: "LIAM", lastName: "LAWSON", flag: "/Web F1/images/race/countries/australia-flag.avif", team: "Red Bull Racing", img: "/Web F1/images/Drivers/lasson.avif", color: "#1E41FF" },
        { firstName: "OSCAR", lastName: "PIASTRI", flag: "/Web F1/images/race/countries/australia-flag.avif", team: "McLaren", img: "/Web F1/images/Drivers/piastri.avif", color: "#FF8000" },
        { firstName: "LANDO", lastName: "NORRIS", flag: "/Web F1/images/race/countries/uk-flag.avif", team: "McLaren", img: "/Web F1/images/Drivers/norris.avif", color: "#FF8000" },
        { firstName: "CHARLES", lastName: "LECLERC", flag: "/Web F1/images/race/countries/Monaco.avif", team: "Ferrari", img: "/Web F1/images/Drivers/Leclerc.png", color: "#DC0000" },
        { firstName: "LEWIS", lastName: "HAMILTON", flag: "/Web F1/images/race/countries/uk-flag.avif", team: "Ferrari", img: "/Web F1/images/Drivers/hamilton.avif", color: "#DC0000" },
        { firstName: "GEORGE", lastName: "RUSSELL", flag: "/Web F1/images/race/countries/uk-flag.avif", team: "Mercedes", img: "/Web F1/images/Drivers/russel.avif", color: "#00D2BE" },
        { firstName: "ANDREA KIMI", lastName: "ANTONELLI", flag: "/Web F1/images/race/countries/italy-flag.avif", team: "Mercedes", img: "/Web F1/images/Drivers/antonelli.avif", color: "#00D2BE" },
        { firstName: "LANCE", lastName: "STROLL", flag: "/Web F1/images/race/countries/canada-flag.avif", team: "Aston Martin", img: "/Web F1/images/Drivers/stroll.avif", color: "#006F62" },
        { firstName: "FERNANDO", lastName: "ALONSO", flag: "/Web F1/images/race/countries/spain-flag.avif", team: "Aston Martin", img: "/Web F1/images/Drivers/alonso.avif", color: "#006F62" },
        { firstName: "PIERRE", lastName: "GASLY", flag: "/Web F1/images/race/countries/France.avif", team: "Alpine", img: "/Web F1/images/Drivers/gasly.avif", color: "#0090FF" },
        { firstName: "JACK", lastName: "DOOHAN", flag: "/Web F1/images/race/countries/australia-flag.avif", team: "Alpine", img: "/Web F1/images/Drivers/doohan.avif", color: "#0090FF" },
        { firstName: "ISACK", lastName: "HADJAR", flag: "/Web F1/images/race/countries/France.avif", team: "Racing Bulls", img: "/Web F1/images/Drivers/hdjar.avif", color: "#6699FF" },
        { firstName: "YUKI", lastName: "TSUNODA", flag: "/Web F1/images/race/countries/japan-flag.avif", team: "Racing Bulls", img: "/Web F1/images/Drivers/tsunoda.avif", color: "#6699FF" },
        { firstName: "ESTEBAN", lastName: "OCON", flag: "/Web F1/images/race/countries/France.avif", team: "Haas", img: "/Web F1/images/Drivers/ocon.avif", color: "#B6BABD" },
        { firstName: "OLIVER", lastName: "BEARMAN", flag: "/Web F1/images/race/countries/uk-flag.avif", team: "Haas", img: "/Web F1/images/Drivers/berman.avif", color: "#B6BABD" },
        { firstName: "NICO", lastName: "HULKKENBERG", flag: "/Web F1/images/race/countries/Germany.avif", team: "Kick Sauber", img: "/Web F1/images/Drivers/hulkkenberg.avif", color: "#35FF02FF" },
        { firstName: "GABRIEL", lastName: "BORTOLETO", flag: "/Web F1/images/race/countries/Brazil-flag.avif", team: "Kick Sauber", img: "/Web F1/images/Drivers/bortoleto.avif", color: "#35FF02FF" },
        { firstName: "ALEXANDER", lastName: "ALBON", flag: "/Web F1/images/race/countries/Thailand.avif", team: "Kick Sauber", img: "/Web F1/images/Drivers/albon.avif", color: "#52C4C4" },
        { firstName: "CARLOS", lastName: "SAINZ", flag: "/Web F1/images/race/countries/Spain-flag.avif", team: "Kick Sauber", img: "/Web F1/images/Drivers/sainz.avif", color: "#52C4C4" }
    ];
    
    const drivergrid = document.getElementById("drivergrid");

    drivergrid.innerHTML = ""; // Limpiar el contenido antes de agregar nuevas tarjetas

    drivers.forEach(driver => {
        const card = document.createElement("div");
        card.classList.add("card", "text-center");

        card.innerHTML = `
            <div class="card-body">
                <p class="name">
                    <span class="color-bar" style="background-color: ${driver.color};"></span>
                    ${driver.firstName}
                </p>
                <p class="last">${driver.lastName}<img class="flag-img" src="${driver.flag}" alt="Country Flag"></p>
                <div class="linea"></div>
                <p class="team">${driver.team}</p>
                <img class="driver" src="${driver.img}" alt="${driver.lastName}">
            </div>
        `;

        drivergrid.appendChild(card);
    });
});

