document.addEventListener('DOMContentLoaded', () => {

    // --- LANGUAGE DATA ---
    const langData = {
        bn: {
            meta_title: "পরিমাপ বিডি - জমি পরিমাপ ও ইউনিট কনভার্টার",
            meta_description: "পরিমাপ বিডি একটি আধুনিক ও সহজবোধ্য টুল, যা দিয়ে আপনি জমিজমার ক্ষেত্রফল নির্ণয় এবং বিভিন্ন ইউনিটের মধ্যে রূপান্তর করতে পারবেন।",
            meta_keywords: "জমি পরিমাপ, ক্ষেত্রফল নির্ণয়, ইউনিট কনভার্টার, বিঘা, কাঠা, শতক, একর, হেক্টর, গন্ডা, ছটাক, porimap bd, land measurement bangladesh",
            website_name: "পরিমাপ বিডি",
            nav_home: "হোম",
            nav_calculator: "ক্ষেত্রফল নির্ণয়",
            nav_converter: "ইউনিট কনভার্টার",
            nav_about: "আমার সম্পর্কে",
            nav_donate: "দান করুন",
            nav_contact: "যোগাযোগ",
            select_option: "একক নির্বাচন করুন",
            home_title: "জমিজমার পরিমাপ, এখন হাতের মুঠোয়।",
            home_subtitle: "পরিমাপ বিডি একটি আধুনিক ও সহজবোধ্য টুল, যা দিয়ে আপনি জমিজমার ক্ষেত্রফল নির্ণয় এবং বিভিন্ন ইউনিটের মধ্যে রূপান্তর করতে পারবেন। সম্পূর্ণ বিনামূল্যে ও নির্ভুল হিসাব।",
            home_cta_button: "ক্ষেত্রফল নির্ণয় করুন",
            how_it_works_title: "এটি কিভাবে কাজ করে",
            how_it_works_subtitle: "মাত্র ৩টি সহজ ধাপে আপনার জমির ক্ষেত্রফল গণনা করুন।",
            step1_title: "জমির আকৃতি নির্বাচন",
            step1_desc: "প্রথমে আপনার জমির আকৃতি (যেমন: চতুর্ভুজ, ত্রিভুজ, বৃত্ত) তালিকা থেকে নির্বাচন করুন।",
            step2_title: "দৈর্ঘ্য-প্রস্থ ইনপুট দিন",
            step2_desc: "এরপর নির্দিষ্ট ফর্ম এ আপনার জমির বাহুগুলোর দৈর্ঘ্য ফুট ও ইঞ্চি এককে প্রদান করুন।",
            step3_title: "ফলাফল দেখুন ও ডাউনলোড করুন",
            step3_desc: "সাথে সাথে ফলাফল দেখুন বিঘা, কাঠা, শতক সহ বিভিন্ন এককে এবং প্রয়োজন হলে ডাউনলোড করুন।",
            calculator_section_title: "ক্ষেত্রফল নির্ণয় করুন",
            calculator_section_subtitle: "নিচের তালিকা থেকে আপনার জমির আকৃতি নির্বাচন করে পরিমাপ শুরু করুন।",
            calculate_button: "হিসাব করুন",
            calculation_result_title: "হিসাবের ফলাফল",
            table_header_unit: "ইউনিট",
            table_header_value: "মান",
            download_png: "PNG ডাউনলোড",
            share_result: "শেয়ার",
            input_feet: "ফুট",
            input_inch: "ইঞ্চি",
            converter_section_title: "ইউনিট কনভার্টার",
            converter_section_subtitle: "যেকোনো একটি এককের মান ইনপুট করে অন্য এককগুলোতে তার সমতুল্য মান জানুন।",
            converter_input_label: "পরিমাণ",
            converter_from_unit_label: "থেকে",
            converter_result_title: "রূপান্তরিত ফলাফল",
            testimonial_title: "ব্যবহারকারীদের মতামত",
            testimonial1_text: `"খুবই উপকারী একটি ওয়েবসাইট। আমার মতো সাধারণ মানুষের জন্য জমিজমার হিসাব অনেক সহজ হয়ে গেছে।"`,
            testimonial1_name: "আব্দুল করিম",
            testimonial1_location: "ঢাকা, বাংলাদেশ",
            testimonial2_text: `"এই সাইটের ইউনিট কনভার্টারটি অসাধারণ। বিশেষ করে PNG ডাউনলোড ফিচারটি আমার খুব কাজে লেগেছে।"`,
            testimonial2_name: "সুমন আহমেদ",
            testimonial2_location: "চট্টগ্রাম, বাংলাদেশ",
            testimonial3_text: `"মোবাইলে খুব সহজে ব্যবহার করা যায়। আমি একজন সার্ভেয়ার, আমার প্রতিদিনের কাজে এটি ব্যবহার করি।"`,
            testimonial3_name: "ফারিহা ইসলাম",
            testimonial3_location: "রাজশাহী, বাংলাদেশ",
            faq_title: "সাধারণ জিজ্ঞাসা",
            about_section_title: "আমার সম্পর্কে",
            about_name: "ইয়াসিন হাসান",
            about_bio_1: "আমি একজন ডিপ্লোমা ইন সার্ভে ইঞ্জিনিয়ারিংয়ের ছাত্র এবং একই সাথে একজন ওয়েব ডেভেলপার। ভূমি জরিপের মতো একটি জটিল বিষয়কে প্রযুক্তির সাহায্যে সাধারণ মানুষের কাছে সহজলভ্য করে তোলার লক্ষ্যে আমি এই টুলটি তৈরি করেছি।",
            about_bio_2: "আমার মূল উদ্দেশ্য হলো, জমির পরিমাপ সংক্রান্ত যাবতীয় হিসাব-নিকাশকে একটি সহজ এবং নির্ভরযোগ্য প্ল্যাটফর্মে নিয়ে আসা, যাতে যে কেউ সহজেই এটি ব্যবহার করতে পারে। আপনাদের যেকোনো গঠনমূলক মতামত ও পরামর্শ আমাকে এই উদ্যোগকে আরও এগিয়ে নিতে উৎসাহিত করবে।",
            donate_section_title: "অনুদান পাঠান",
            donate_section_subtitle: "এই প্রকল্পটি সম্পূর্ণ বিনামূল্যে পরিচালিত হয়। আপনার ছোট্ট একটি অনুদান আমাদের এই প্রকল্পটি চালিয়ে নিতে এবং এটিকে আরও উন্নত করতে বড় অনুপ্রেরণা জোগাবে।",
            payment_description_bkash: "বাংলাদেশের সবচেয়ে জনপ্রিয় মোবাইল ব্যাংকিং মাধ্যম।",
            payment_description_nagad: "সহজ ও দ্রুত লেনদেনের জন্য একটি নির্ভরযোগ্য মাধ্যম।",
            payment_description_upay: "একটি আধুনিক ও ক্রমবর্ধমান মোবাইল ওয়ালেট সেবা।",
            contact_section_title: "যোগাযোগ",
            map_title: "আমাদের অবস্থান",
            contact_form_title: "বার্তা পাঠান",
            contact_form_subtitle: "যেকোনো প্রশ্ন, মতামত বা সহায়তার জন্য নিচের ফর্মটি পূরণ করুন। আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।",
            form_name: "নাম",
            form_email: "ইমেইল",
            form_subject: "বিষয়",
            form_message: "বার্তা",
            form_submit_button: "বার্তা পাঠান",
            share_text_area: "আমি পরিমাপ বিডি ব্যবহার করে জমির ক্ষেত্রফল নির্ণয় করেছি। ফলাফল:",
            share_text_converter: "আমি পরিমাপ বিডি ব্যবহার করে ইউনিট রূপান্তর করেছি। ফলাফল:",
            footer_copyright: "© 2024 পরিমাপ বিডি | সর্বস্বত্ব সংরক্ষিত।",
            footer_developed_by: "ডিজাইন ও ডেভেলপ করেছেন"
        },
        en: {
            meta_title: "Porimap BD - Land Measurement & Unit Converter",
            meta_description: "Porimap BD is a modern and user-friendly tool for calculating land area and converting between various units.",
            meta_keywords: "land measurement, area calculator, unit converter, bigha, katha, shatak, acre, hector, gonda, chhatak, porimap bd, bangladesh",
            website_name: "Porimap BD",
            nav_home: "Home",
            nav_calculator: "Area Calculator",
            nav_converter: "Unit Converter",
            nav_about: "About Me",
            nav_donate: "Donate",
            nav_contact: "Contact",
            select_option: "Select Unit",
            home_title: "Land Measurement, At Your Fingertips.",
            home_subtitle: "Porimap BD is a modern and user-friendly tool for calculating land area and converting between various units. Completely free and accurate.",
            home_cta_button: "Calculate Area",
            how_it_works_title: "How It Works",
            how_it_works_subtitle: "Calculate your land area in just 3 easy steps.",
            step1_title: "Select Land Shape",
            step1_desc: "First, select the shape of your land (e.g., quadrilateral, triangle, circle) from the list.",
            step2_title: "Input Dimensions",
            step2_desc: "Next, provide the lengths of the sides of your land in feet and inches in the specific form.",
            step3_title: "Get & Download Result",
            step3_desc: "Instantly see the result in various units like Bigha, Katha, Shatak, and download if needed.",
            calculator_section_title: "Calculate Area",
            calculator_section_subtitle: "Select your land shape from the list below to start measuring.",
            calculate_button: "Calculate",
            calculation_result_title: "Calculation Result",
            table_header_unit: "Unit",
            table_header_value: "Value",
            download_png: "Download PNG",
            share_result: "Share",
            input_feet: "Feet",
            input_inch: "Inches",
            converter_section_title: "Unit Converter",
            converter_section_subtitle: "Input a value in any unit to see its equivalent in other units.",
            converter_input_label: "Amount",
            converter_from_unit_label: "From",
            converter_result_title: "Converted Results",
            testimonial_title: "User Testimonials",
            testimonial1_text: `"A very useful website. Land calculation has become much easier for common people like me."`,
            testimonial1_name: "Abdul Karim",
            testimonial1_location: "Dhaka, Bangladesh",
            testimonial2_text: `"The unit converter on this site is excellent. The PNG download feature has been very helpful for me."`,
            testimonial2_name: "Sumon Ahmed",
            testimonial2_location: "Chittagong, Bangladesh",
            testimonial3_text: `"Very easy to use on mobile. As a surveyor, I use it in my daily work."`,
            testimonial3_name: "Fariha Islam",
            testimonial3_location: "Rajshahi, Bangladesh",
            faq_title: "Frequently Asked Questions",
            about_section_title: "About Me",
            about_name: "Yamin Hasan",
            about_bio_1: "I am a student of Diploma in Survey Engineering and also a web developer. I created this tool to make a complex subject like land surveying accessible to the common people with the help of technology.",
            about_bio_2: "My main goal is to bring all the calculations related to land measurement into a simple and reliable platform that anyone can use easily. Your constructive feedback and suggestions will encourage me to take this initiative further.",
            donate_section_title: "Send a Donation",
            donate_section_subtitle: "This project is run entirely free of charge. Your small donation will be a great inspiration to continue and improve this project.",
            payment_description_bkash: "The most popular mobile banking service in Bangladesh.",
            payment_description_nagad: "A reliable medium for easy and fast transactions.",
            payment_description_upay: "A modern and growing mobile wallet service.",
            contact_section_title: "Contact",
            map_title: "Our Location",
            contact_form_title: "Send a Message",
            contact_form_subtitle: "For any questions, feedback, or support, please fill out the form below. We will get back to you as soon as possible.",
            form_name: "Name",
            form_email: "Email",
            form_subject: "Subject",
            form_message: "Message",
            form_submit_button: "Send Message",
            share_text_area: "I've calculated my land area using Porimap BD. The result is:",
            share_text_converter: "I've converted units using Porimap BD. The result is:",
            footer_copyright: "© 2024 Porimap BD | All Rights Reserved.",
            footer_developed_by: "Designed & Developed by"
        }
    };

    // --- CORE ELEMENTS ---
    const langSwitch = document.getElementById('langSwitch');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    let currentLang = 'bn';

    const setLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.body.style.fontFamily = lang === 'bn' ? 'var(--font-bn)' : 'var(--font-en)';
        
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (langData[lang][key]) {
                if (el.tagName === 'META') {
                    el.content = langData[lang][key];
                } else if (el.tagName === 'TITLE') {
                    el.textContent = langData[lang][key];
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.type !== 'submit') el.placeholder = langData[lang][key];
                } else {
                    el.innerHTML = langData[lang][key];
                }
            }
        });

        langSwitch.querySelector('.bn').classList.toggle('active', lang === 'bn');
        langSwitch.querySelector('.en').classList.toggle('active', lang === 'en');
        
        renderShapeCards();
        renderFaqItems();
        renderUnitConverterOptions();

        if (lastResultData.sq_ft) displayResults(lastResultData.sq_ft, false);
        if (Object.keys(lastConverterResult).length > 0) performConversion();
    };

    langSwitch.addEventListener('click', (e) => {
        if (e.target.classList.contains('bn')) {
            setLanguage('bn');
        } else if (e.target.classList.contains('en')) {
            setLanguage('en');
        }
    });

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const CONVERSIONS = {
        SQ_FT_PER_BIGHA: 14400,
        SQ_FT_PER_KATHA: 720,
        SQ_FT_PER_CHHATAK: 45,
        SQ_FT_PER_GONDA: 2.25,
        SQ_FT_PER_SHATAK: 435.6,
        SQ_FT_PER_ACRE: 43560,
        SQ_FT_PER_HECTARE: 107639.1,
    };
    
    const shapes = [
        { id: 'bishom_bahu', icon: 'crop_landscape', formula: 'heron_diagonal' },
        { id: 'rectangle', icon: 'crop_7_5', formula: 'rectangle' },
        { id: 'square', icon: 'crop_square', formula: 'square' },
        { id: 'trapezium', icon: 'show_chart', formula: 'trapezium' },
        { id: 'parallelogram', icon: 'send', formula: 'parallelogram' },
        { id: 'rhombus', icon: 'change_history', formula: 'rhombus' },
        { id: 'kite', icon: 'details', formula: 'kite' },
        { id: 'polygon', icon: 'pentagon', formula: 'regular_polygon' },
        { id: 'right_triangle', icon: 'signal_cellular_alt_2_bar', formula: 'right_triangle' },
        { id: 'equilateral_triangle', icon: 'play_arrow', formula: 'equilateral_triangle' },
        { id: 'isosceles_triangle', icon: 'eject', formula: 'isosceles_triangle' },
        { id: 'scalene_triangle', icon: 'trending_up', formula: 'scalene_triangle' },
        { id: 'circle', icon: 'circle', formula: 'circle' },
        { id: 'semicircle', icon: 'nightlight_round', formula: 'semicircle' },
        { id: 'ellipse', icon: 'lens_blur', formula: 'ellipse' },
        { id: 'circle_sector', icon: 'pie_chart', formula: 'circle_sector' },
    ];
    
    const shapeLang = {
        bn: {
            bishom_bahu: { name: 'বিষমবাহু চতুর্ভুজ', desc: 'চারটি ভিন্ন বাহু ও একটি কর্ণ দ্বারা পরিমাপ', labels: ['বাহু ১', 'বাহু ২', 'বাহু ৩', 'বাহু ৪', 'কর্ণ'] },
            rectangle: { name: 'আয়ত', desc: 'বিপরীত বাহুগুলো সমান ও সমান্তরাল', labels: ['দৈর্ঘ্য', 'প্রস্থ'] },
            square: { name: 'বর্গ', desc: 'চারটি বাহু সমান', labels: ['এক বাহুর দৈর্ঘ্য'] },
            trapezium: { name: 'ট্রাপিজিয়াম', desc: 'দুটি সমান্তরাল বাহু ও তাদের উচ্চতা', labels: ['সমান্তরাল বাহু ১', 'সমান্তরাল বাহু ২', 'উচ্চতা'] },
            parallelogram: { name: 'সামান্তরিক', desc: 'ভূমি, সংলগ্ন বাহু ও মধ্যবর্তী কোণ', labels: ['ভূমি', 'সংলগ্ন বাহু', 'মধ্যবর্তী কোণ (ডিগ্রী)'] },
            rhombus: { name: 'রম্বস', desc: 'দুটি কর্ণের দৈর্ঘ্য দ্বারা পরিমাপ', labels: ['কর্ণ ১', 'কর্ণ ২'] },
            kite: { name: 'ঘুড়ি', desc: 'দুটি কর্ণের দৈর্ঘ্য দ্বারা পরিমাপ', labels: ['কর্ণ ১', 'কর্ণ ২'] },
            polygon: { name: 'সুষম বহুভুজ', desc: 'সকল বাহু সমান এমন বহুভুজের পরিমাপ', labels: ['বাহুর সংখ্যা (n)', 'এক বাহুর দৈর্ঘ্য'] },
            right_triangle: { name: 'সমকোণী ত্রিভুজ', desc: 'ভূমি ও উচ্চতা দ্বারা পরিমাপ', labels: ['ভূমি', 'উচ্চতা'] },
            equilateral_triangle: { name: 'সমবাহু ত্রিভুজ', desc: 'তিনটি বাহু সমান', labels: ['এক বাহুর দৈর্ঘ্য'] },
            isosceles_triangle: { name: 'সমদ্বিবাহু ত্রিভুজ', desc: 'দুটি সমান বাহু ও ভূমি', labels: ['সমান বাহু', 'ভূমি'] },
            scalene_triangle: { name: 'বিষমবাহু ত্রিভুজ', desc: 'তিনটি ভিন্ন বাহু দ্বারা পরিমাপ', labels: ['বাহু ১', 'বাহু ২', 'বাহু ৩'] },
            circle: { name: 'বৃত্ত', desc: 'ব্যাসার্ধ দ্বারা পরিমাপ', labels: ['ব্যাসার্ধ'] },
            ellipse: { name: 'ডিম্বাকৃতি', desc: 'প্রধান ও অপ্রধান অক্ষের অর্ধেক', labels: ['প্রধান অক্ষের অর্ধেক (a)', 'অপ্রধান অক্ষের অর্ধেক (b)'] },
            semicircle: { name: 'অর্ধবৃত্ত', desc: 'ব্যাসার্ধ দ্বারা পরিমাপ', labels: ['ব্যাসার্ধ'] },
            circle_sector: { name: 'বৃত্তকলা', desc: 'ব্যাসার্ধ এবং মধ্যবর্তী কোণ দ্বারা পরিমাপ', labels: ['ব্যাসার্ধ', 'কোণ (ডিগ্রী)'] },
        },
        en: {
            bishom_bahu: { name: 'Irregular Quadrilateral', desc: 'Measured by four sides and a diagonal', labels: ['Side 1', 'Side 2', 'Side 3', 'Side 4', 'Diagonal'] },
            rectangle: { name: 'Rectangle', desc: 'Opposite sides are equal and parallel', labels: ['Length', 'Width'] },
            square: { name: 'Square', desc: 'All four sides are equal', labels: ['Length of one side'] },
            trapezium: { name: 'Trapezium', desc: 'Two parallel sides and their height', labels: ['Parallel Side 1', 'Parallel Side 2', 'Height'] },
            parallelogram: { name: 'Parallelogram', desc: 'Base, adjacent side, and the angle', labels: ['Base', 'Adjacent Side', 'Angle (degrees)'] },
            rhombus: { name: 'Rhombus', desc: 'Measured by the two diagonals', labels: ['Diagonal 1', 'Diagonal 2'] },
            kite: { name: 'Kite', desc: 'Measured by the two diagonals', labels: ['Diagonal 1', 'Diagonal 2'] },
            polygon: { name: 'Regular Polygon', desc: 'Polygon with all equal sides', labels: ['Number of Sides (n)', 'Length of one side'] },
            right_triangle: { name: 'Right Triangle', desc: 'Measured by base and height', labels: ['Base', 'Height'] },
            equilateral_triangle: { name: 'Equilateral Triangle', desc: 'All three sides are equal', labels: ['Length of one side'] },
            isosceles_triangle: { name: 'Isosceles Triangle', desc: 'Two equal sides and a base', labels: ['Equal Side', 'Base'] },
            scalene_triangle: { name: 'Scalene Triangle', desc: 'Measured by three different sides', labels: ['Side 1', 'Side 2', 'Side 3'] },
            circle: { name: 'Circle', desc: 'Measured by its radius', labels: ['Radius'] },
            ellipse: { name: 'Ellipse', desc: 'Half of major and minor axes', labels: ['Semi-major axis (a)', 'Semi-minor axis (b)'] },
            semicircle: { name: 'Semicircle', desc: 'Measured by its radius', labels: ['Radius'] },
            circle_sector: { name: 'Circle Sector', desc: 'Measured by radius and angle', labels: ['Radius', 'Angle (degrees)'] },
        }
    };

    const shapeGrid = document.querySelector('.shape-grid');
    
    function renderShapeCards() {
        shapeGrid.innerHTML = '';
        shapes.forEach(shape => {
            const data = shapeLang[currentLang][shape.id];
            const card = document.createElement('div');
            card.className = 'shape-card';
            card.dataset.shape = shape.id;
            card.innerHTML = `
                <i class="material-icons icon">${shape.icon}</i>
                <h4>${data.name}</h4>
                <p>${data.desc}</p>
            `;
            card.addEventListener('click', () => openCalculatorModal(shape.id));
            shapeGrid.appendChild(card);
        });
    }
    
    const modal = document.getElementById('calculatorModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalInputs = document.getElementById('modalInputs');
    const calculatorForm = document.getElementById('calculatorForm');
    const resultContainer = document.getElementById('result-container');
    const resultTableBody = document.querySelector('#result-table tbody');
    let currentShapeId = null;

    function openCalculatorModal(shapeId) {
        currentShapeId = shapeId;
        const shape = shapes.find(s => s.id === shapeId);
        const data = shapeLang[currentLang][shapeId];
        
        modalTitle.textContent = data.name;
        modalDescription.textContent = data.desc;
        modalInputs.innerHTML = '';
        
        data.labels.forEach((label, index) => {
            let inputHtml;
            const fieldId = `input_${index}`;
            
            if ((shape.id === 'parallelogram' && index === 2) || (shape.id === 'circle_sector' && index === 1)) {
                inputHtml = `<div class="input-group"><label for="${fieldId}">${label}</label><input type="number" id="${fieldId}" step="any" placeholder="e.g., 90" required></div>`;
            } else if (shape.id === 'polygon' && index === 0) {
                inputHtml = `<div class="input-group"><label for="${fieldId}">${label}</label><input type="number" id="${fieldId}" step="1" min="3" placeholder="e.g., 5" required></div>`;
            } else {
                inputHtml = `<div class="input-group">
                                <label>${label}</label>
                                <div class="input-pair">
                                    <input type="number" id="${fieldId}_ft" step="any" placeholder="${langData[currentLang].input_feet}" required>
                                    <input type="number" id="${fieldId}_in" step="any" placeholder="${langData[currentLang].input_inch}">
                                </div>
                             </div>`;
            }
            modalInputs.innerHTML += inputHtml;
        });

        calculatorForm.reset();
        resultContainer.style.display = 'none';
        modal.style.display = 'block';
    }

    closeModalBtn.onclick = () => { modal.style.display = 'none'; };
    window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };
    
    const getInputVal = (index) => (parseFloat(document.getElementById(`input_${index}_ft`).value) || 0) + ((parseFloat(document.getElementById(`input_${index}_in`).value) || 0) / 12);
    const getSingleInputVal = (index) => parseFloat(document.getElementById(`input_${index}`).value) || 0;

    calculatorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const shape = shapes.find(s => s.id === currentShapeId);
        let area = 0;
        const heron = (a, b, c) => {
            if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) return 0;
            const s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        };

        try {
            switch(shape.formula) {
                case 'heron_diagonal': area = heron(getInputVal(0), getInputVal(1), getInputVal(4)) + heron(getInputVal(2), getInputVal(3), getInputVal(4)); break;
                case 'rectangle': area = getInputVal(0) * getInputVal(1); break;
                case 'square': const sSq = getInputVal(0); area = sSq * sSq; break;
                case 'trapezium': area = ((getInputVal(0) + getInputVal(1)) / 2) * getInputVal(2); break;
                case 'parallelogram': area = getInputVal(0) * getInputVal(1) * Math.sin(getSingleInputVal(2) * Math.PI / 180); break;
                case 'rhombus': case 'kite': area = (getInputVal(0) * getInputVal(1)) / 2; break;
                case 'right_triangle': area = (getInputVal(0) * getInputVal(1)) / 2; break;
                case 'equilateral_triangle': const sEq = getInputVal(0); area = (Math.sqrt(3) / 4) * sEq * sEq; break;
                case 'isosceles_triangle': const eqS = getInputVal(0), bIso = getInputVal(1); if (2 * eqS > bIso) area = (bIso / 2) * Math.sqrt(eqS*eqS - (bIso*bIso/4)); break;
                case 'scalene_triangle': area = heron(getInputVal(0), getInputVal(1), getInputVal(2)); break;
                case 'circle': const r = getInputVal(0); area = Math.PI * r * r; break;
                case 'ellipse': area = Math.PI * getInputVal(0) * getInputVal(1); break;
                case 'semicircle': const rSemi = getInputVal(0); area = (Math.PI * rSemi * rSemi) / 2; break;
                case 'regular_polygon': const n = getSingleInputVal(0), sPoly = getInputVal(1); if (n >= 3) area = (n * sPoly * sPoly) / (4 * Math.tan(Math.PI / n)); break;
                case 'circle_sector': area = (Math.PI * getInputVal(0) * getInputVal(0) * getSingleInputVal(1)) / 360; break;
            }
        } catch (error) {
             alert(currentLang === 'bn' ? 'দয়া করে সঠিক ইনপুট দিন।' : 'Please provide valid inputs.');
             return;
        }
        
        if (area > 0 && isFinite(area)) displayResults(area, true);
        else alert(currentLang === 'bn' ? 'অবৈধ ইনপুট অথবা এই বাহু দিয়ে ক্ষেত্র গঠন সম্ভব নয়।' : 'Invalid input or the shape cannot be formed with these dimensions.');
    });

    let lastResultData = {};

    function displayResults(sqFt, isNewCalculation) {
        if (isNewCalculation) {
            lastResultData = {
                bigha: sqFt / CONVERSIONS.SQ_FT_PER_BIGHA,
                katha: sqFt / CONVERSIONS.SQ_FT_PER_KATHA,
                chhatak: sqFt / CONVERSIONS.SQ_FT_PER_CHHATAK,
                gonda: sqFt / CONVERSIONS.SQ_FT_PER_GONDA,
                shatak: sqFt / CONVERSIONS.SQ_FT_PER_SHATAK,
                acre: sqFt / CONVERSIONS.SQ_FT_PER_ACRE,
                hectare: sqFt / CONVERSIONS.SQ_FT_PER_HECTARE,
                sq_ft: sqFt
            };
        }
        const unitNames = {
            bn: { bigha: 'বিঘা', katha: 'কাঠা', chhatak: 'ছটাক', gonda: 'গন্ডা', shatak: 'শতক', acre: 'একর', hectare: 'হেক্টর', sq_ft: 'বর্গফুট' },
            en: { bigha: 'Bigha', katha: 'Katha', chhatak: 'Chhatak', gonda: 'Gonda', shatak: 'Shatak', acre: 'Acre', hectare: 'Hectare', sq_ft: 'Square Feet' }
        };
        const displayOrder = ['sq_ft', 'shatak', 'katha', 'bigha', 'acre', 'hectare', 'chhatak', 'gonda'];
        
        resultTableBody.innerHTML = displayOrder.map(unit =>
            `<tr><td>${unitNames[currentLang][unit]}</td><td>${lastResultData[unit].toFixed(4)}</td></tr>`
        ).join('');
        
        resultContainer.style.display = 'block';
    }

    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');

    downloadBtn.addEventListener('click', () => {
        prepareDownloadableContent('calc');
        html2canvas(document.getElementById('downloadable-result'), { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = `porimap-bd-result-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
    
    shareBtn.addEventListener('click', () => {
        const uNames = currentLang === 'bn' ? { sq_ft: 'বর্গফুট', shatak: 'শতক', katha: 'কাঠা' } : { sq_ft: 'sq ft', shatak: 'Shatak', katha: 'Katha' };
        const shareText = `${langData[currentLang].share_text_area}\n${lastResultData.sq_ft.toFixed(2)} ${uNames.sq_ft} (${lastResultData.shatak.toFixed(2)} ${uNames.shatak}, ${lastResultData.katha.toFixed(2)} ${uNames.katha}).\n\nনির্ভুলভাবে জমির হিসাব করুন পরিমাপ বিডি দিয়ে:\n${window.location.href.split(/[?#]/)[0]}`;
        if (navigator.share) {
            navigator.share({ title: 'Porimap BD Result', text: shareText });
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                alert(currentLang === 'bn' ? 'ফলাফল ক্লিপবোর্ডে কপি করা হয়েছে।' : 'Result copied to clipboard.');
            });
        }
    });

    function prepareDownloadableContent(type) {
        let container, titleEl, dateEl, tableEl, tableBody, data;
        const shapeName = currentShapeId ? shapeLang[currentLang][currentShapeId]?.name : (currentLang === 'bn' ? 'ইউনিট কনভার্সন' : 'Unit Conversion');

        if(type === 'calc') {
            container = document.getElementById('downloadable-result');
            titleEl = document.getElementById('download-title-calc');
            dateEl = document.getElementById('download-date-calc');
            tableEl = document.getElementById('download-table-calc');
            tableBody = resultTableBody.innerHTML;
            data = langData[currentLang];
            titleEl.textContent = `${shapeName} - ${data.calculation_result_title}`;
        } else {
            container = document.getElementById('downloadable-converter-result');
            titleEl = document.getElementById('download-title-conv');
            dateEl = document.getElementById('download-date-conv');
            tableEl = document.getElementById('download-table-conv');
            tableBody = document.querySelector('#converter-result-table tbody').innerHTML;
            data = langData[currentLang];
            titleEl.textContent = data.converter_result_title;
        }

        container.style.fontFamily = currentLang === 'bn' ? 'var(--font-bn)' : 'var(--font-en)';
        dateEl.textContent = new Date().toLocaleString(currentLang === 'bn' ? 'bn-BD' : 'en-US');
        tableEl.innerHTML = `<table class="result-table" style="width:100%; border-collapse: collapse; font-size: 16px;"><thead><tr><th style="padding: 12px; border: 1px solid #ddd; text-align: left; background-color: #00796b; color: #fff;">${data.table_header_unit}</th><th style="padding: 12px; border: 1px solid #ddd; text-align: left; background-color: #00796b; color: #fff;">${data.table_header_value}</th></tr></thead><tbody>${tableBody}</tbody></table>`;
    }

    const faqContainer = document.querySelector('.faq-container');
    const faqData = { bn: [ {q: 'এই ওয়েবসাইটটি কি বিনামূল্যে ব্যবহার করা যায়?', a: 'হ্যাঁ, পরিমাপ বিডি সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়।'}, {q: 'হিসাবগুলো কি নির্ভরযোগ্য?', a: 'হ্যাঁ, সকল হিসাব প্রচলিত ভূমি জরিপ সূত্র অনুযায়ী করা হয়। তবে চূড়ান্ত আইনি কাজের জন্য রেজিস্টার্ড সার্ভেয়ারের সাহায্য নিন।'}, {q: 'ফুট এবং ইঞ্চিতে কিভাবে ইনপুট দেব?', a: 'প্রতিটি দৈর্ঘ্যের জন্য দুটি বক্স রয়েছে। যেমন, ৫ ফুট ৬ ইঞ্চির জন্য প্রথম বক্সে 5 এবং দ্বিতীয় বক্সে 6 লিখুন।'}, {q: 'বিষমবাহু চতুর্ভুজের কর্ণ কোনটি?', a: 'জমিকে দুটি ত্রিভুজে ভাগ করার জন্য যেকোনো একটি কোণাকুণি কর্ণ (diagonal) মেপে ইনপুট দিন।'}, {q: 'ফলাফল প্রিন্ট করা যাবে?', a: 'হ্যাঁ, ফলাফল PNG ফাইল হিসেবে ডাউনলোড করে প্রিন্ট করতে পারেন।'}, {q: 'মোবাইল থেকে ব্যবহার করা যাবে?', a: 'অবশ্যই। ওয়েবসাইটটি সম্পূর্ণ মোবাইল ফ্রেন্ডলি এবং যেকোনো ডিভাইস থেকে সহজে ব্যবহারযোগ্য।'}, {q: 'গন্ডা ও ছটাকের হিসাব কি সঠিক?', a: 'হ্যাঁ, এখানে ১ কাঠা = ১৬ ছটাক এবং ১ ছটাক = ২০ গন্ডা হিসেবে হিসাব করা হয়েছে, যা বিভিন্ন অঞ্চলে প্রচলিত।'}], en: [ {q: 'Is this website free to use?', a: 'Yes, Porimap BD is completely free to use.'}, {q: 'Are the calculations reliable?', a: 'Yes, all calculations are based on standard land survey formulas. For legal purposes, consult a registered surveyor.'}, {q: 'How to input feet and inches?', a: 'Enter feet and inches in their respective boxes. E.g., for 5 ft 6 in, enter 5 in the first box and 6 in the second.'}, {q: 'Which diagonal to use for an irregular quadrilateral?', a: 'Measure any diagonal that divides the land into two triangles and input its length.'}, {q: 'Can I print the results?', a: 'Yes, you can download the results as a PNG file and then print it.'}, {q: 'Can I use it from a mobile phone?', a: 'Absolutely. The website is fully mobile-friendly.'}, {q: 'Are the Gonda and Chhatak calculations correct?', a: 'Yes, the calculation is based on 1 Katha = 16 Chhatak and 1 Chhatak = 20 Gonda, a common standard.'}]};

    function renderFaqItems() {
        faqContainer.innerHTML = '';
        faqData[currentLang].forEach(item => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `<div class="faq-question">${item.q}</div><div class="faq-answer"><p>${item.a}</p></div>`;
            faqContainer.appendChild(faqItem);
        });
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', event => {
                const parent = event.currentTarget.parentElement;
                
                document.querySelectorAll('.faq-item.active').forEach(i => {
                    if (i !== parent) {
                        i.classList.remove('active');
                        i.querySelector('.faq-answer').style.maxHeight = null;
                    }
                });
                
                parent.classList.toggle('active');
                if (parent.classList.contains('active')) {
                    parent.querySelector('.faq-answer').style.maxHeight = parent.querySelector('.faq-answer').scrollHeight + "px";
                } else {
                    parent.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
        });
    }
    
    const converterInput = document.getElementById('converter-input');
    const fromUnitSelect = document.getElementById('from-unit');
    const converterResultContainer = document.getElementById('converter-result-container');
    const converterResultTableBody = document.querySelector('#converter-result-table tbody');
    const units = { bigha: { name_bn: 'বিঘা', name_en: 'Bigha', to_sqft: 14400 }, katha: { name_bn: 'কাঠা', name_en: 'Katha', to_sqft: 720 }, shatak: { name_bn: 'শতক', name_en: 'Shatak', to_sqft: 435.6 }, acre: { name_bn: 'একর', name_en: 'Acre', to_sqft: 43560 }, hectare: { name_bn: 'হেক্টর', name_en: 'Hectare', to_sqft: 107639.1 }, sq_ft: { name_bn: 'বর্গফুট', name_en: 'Square Feet', to_sqft: 1 }, chhatak: { name_bn: 'ছটাক', name_en: 'Chhatak', to_sqft: 45 }, gonda: { name_bn: 'গন্ডা', name_en: 'Gonda', to_sqft: 2.25 }, sq_m: { name_bn: 'বর্গমিটার', name_en: 'Square Meter', to_sqft: 10.76391 } };
    let lastConverterResult = {};
    
    function renderUnitConverterOptions() {
        const currentVal = fromUnitSelect.value;
        fromUnitSelect.innerHTML = '';

        const placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = langData[currentLang].select_option;
        placeholder.disabled = true;
        placeholder.selected = !currentVal;
        fromUnitSelect.appendChild(placeholder);
        
        const displayOrder = ['sq_ft', 'shatak', 'katha', 'bigha', 'acre', 'hectare', 'chhatak', 'gonda', 'sq_m'];

        displayOrder.forEach(key => {
             const option = document.createElement('option');
             option.value = key;
             option.textContent = units[key][`name_${currentLang}`];
             fromUnitSelect.appendChild(option);
        });

        if(currentVal) fromUnitSelect.value = currentVal;
    }
    
    function performConversion() {
        const inputValue = parseFloat(converterInput.value);
        const fromUnit = fromUnitSelect.value;

        if (isNaN(inputValue) || inputValue <= 0 || !fromUnit) {
            converterResultContainer.style.display = 'none';
            lastConverterResult = {};
            return;
        }
        const valueInSqFt = inputValue * units[fromUnit].to_sqft;
        lastConverterResult = {};
        converterResultTableBody.innerHTML = '';
        
        const displayOrder = ['sq_ft', 'shatak', 'katha', 'bigha', 'acre', 'hectare', 'chhatak', 'gonda', 'sq_m'];

        displayOrder.forEach(key => {
            const convertedValue = valueInSqFt / units[key].to_sqft;
            lastConverterResult[key] = convertedValue;
            converterResultTableBody.innerHTML += `<tr><td>${units[key][`name_${currentLang}`]}</td><td>${convertedValue.toFixed(6)}</td></tr>`;
        });
        converterResultContainer.style.display = 'block';
    }

    converterInput.addEventListener('input', performConversion);
    fromUnitSelect.addEventListener('change', performConversion);
    
    const downloadConverterBtn = document.getElementById('downloadConverterBtn');
    const shareConverterBtn = document.getElementById('shareConverterBtn');
    
    downloadConverterBtn.addEventListener('click', () => {
        if (Object.keys(lastConverterResult).length === 0) return;
        prepareDownloadableContent('conv');
        html2canvas(document.getElementById('downloadable-converter-result'), { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = `porimap-bd-conversion-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    shareConverterBtn.addEventListener('click', () => {
        const inputValue = parseFloat(converterInput.value);
        const fromUnitKey = fromUnitSelect.value;
        if (isNaN(inputValue) || !fromUnitKey) return;
        
        const fromUnitName = units[fromUnitKey][`name_${currentLang}`];
        const toUnitKey = fromUnitKey === 'sq_ft' ? 'shatak' : 'sq_ft';
        const toUnitName = units[toUnitKey][`name_${currentLang}`];
        const toValue = lastConverterResult[toUnitKey];

        const shareText = `${langData[currentLang].share_text_converter}\n${inputValue} ${fromUnitName} = ${toValue.toFixed(4)} ${toUnitName}.\n\nনির্ভুলভাবে ইউনিট কনভার্ট করুন পরিমাপ বিডি দিয়ে:\n${window.location.href.split(/[?#]/)[0]}`;
        if (navigator.share) {
            navigator.share({ title: 'Porimap BD Unit Conversion', text: shareText });
        } else {
             navigator.clipboard.writeText(shareText).then(() => {
                alert(currentLang === 'bn' ? 'ফলাফল ক্লিপবোর্ডে কপি করা হয়েছে।' : 'Result copied to clipboard.');
            });
        }
    });

    // --- INITIAL RENDER ---
    setLanguage('bn');
    
});