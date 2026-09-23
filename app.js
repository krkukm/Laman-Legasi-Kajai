/* =========================================
   LAMAN LEGASI KAJAI
   MAIN JAVASCRIPT
   ========================================= */


/*
    Fungsi ini digunakan apabila pengguna
    klik menu pada sidebar.
*/

function showPage(pageId, clickedButton) {

    // Dapatkan semua page
    const pages = document.querySelectorAll(".page");

    // Sembunyikan semua page
    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    // Cari page yang pengguna mahu buka
    const selectedPage =
        document.getElementById(pageId);


    // Paparkan page tersebut
    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    // Dapatkan semua menu sidebar
    const navItems =
        document.querySelectorAll(".nav-item");


    // Buang status active daripada semua menu
    navItems.forEach(function(item) {

        item.classList.remove("active");

    });


    // Jadikan menu yang diklik sebagai active
    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    // Tukar tajuk halaman
    updatePageTitle(pageId);

}


/*
    Fungsi ini digunakan oleh
    Quick Access di Dashboard.
*/

function showPageById(pageId) {

    // Cari menu yang sepadan
    const matchingButton =
        document.querySelector(
            `.nav-item[onclick*="'${pageId}'"]`
        );


    // Buka page
    showPage(pageId, matchingButton);

}


/*
    Tukar tajuk di bahagian header
    berdasarkan page yang sedang dibuka.
*/

function updatePageTitle(pageId) {

    const titles = {

        dashboard:
            "Dashboard",

        alumni:
            "Alumni",

        leadership:
            "Kepimpinan Kajai",

        representatives:
            "Wakil Batch",

        karisma:
            "KARISMA Kajai",

        activities:
            "Aktiviti Alumni",

        achievements:
            "Pencapaian Alumni",

        gallery:
            "Galeri Legasi",

        suggestions:
            "Cadangan & Pengesahan",

        admin:
            "Admin Panel"

    };


    const titleElement =
        document.getElementById("pageTitle");


    if (titleElement) {

        titleElement.textContent =
            titles[pageId] || "Laman Legasi Kajai";

    }

}


/*
    Fungsi ini dijalankan apabila website
    selesai dimuatkan.
*/

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Laman Legasi Kajai berjaya dimuatkan."
        );

    }
);