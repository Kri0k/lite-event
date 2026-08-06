(function() {
            // ---- ДАННЫЕ КОМАНД (10 штук) ----
            const teams = [
                { name: "Багет 21", number: "34", pilot: "Крас", navigator: "Актёр", car: "i20/yashkino.png", sponsors: ["yashkino/1.png", "yashkino/2.png", "yashkino/3.png"] },
                { name: "Волжская связь", number: "63", pilot: "Картограф", navigator: "-", car: "i20/vkusno.png", sponsors: ["vkusno/1.png", "vkusno/2.png", "vkusno/3.png"] },
                { name: "Озонваффлен", number: "24", pilot: "Курьер", navigator: "Лобстер", car: "puma/ozon.png", sponsors: ["ozon/1.png", "ozon/2.png", "ozon/3.png"] },
                { name: "Д.С. 'Подберёзовик'", number: "52", pilot: "Остров", navigator: "Каспий", car: "puma/jeffrey.png", sponsors: ["jeffrey/1.png", "jeffrey/2.png"] },
                { name: "-СВОБОДНО-", number: "00", pilot: "Игрок", navigator: "Игрок", car: "template.png", sponsors: ["-", "-", "-"] },
                { name: "-СВОБОДНО-", number: "00", pilot: "Игрок", navigator: "Игрок", car: "template.png", sponsors: ["-", "-", "-"] },
                { name: "-СВОБОДНО-", number: "00", pilot: "Игрок", navigator: "Игрок", car: "template.png", sponsors: ["-", "-", "-"] },
                { name: "-СВОБОДНО-", number: "00", pilot: "Игрок", navigator: "Игрок", car: "template.png", sponsors: ["-", "-", "-"] },
                { name: "-СВОБОДНО-", number: "00", pilot: "Игрок", navigator: "Игрок", car: "template.png", sponsors: ["-", "-", "-"] },
                { name: "-СВОБОДНО-", number: "00", pilot: "Игрок", navigator: "Игрок", car: "template.png", sponsors: ["-", "-", "-"] }
            ];

            // ---- РЕНДЕР КНОПОК РЕЕСТРА ----
            const cardCar = document.getElementById('cardCar');
            const listContainer = document.getElementById('teamList');
            const cardName = document.getElementById('cardTeamName');
            const cardNumber = document.getElementById('cardTeamNumber');
            const cardSponsors = document.querySelector('.sponsor-logos');
            const crewEl = document.querySelector('.crew');

            function renderTeamButtons() {
                listContainer.innerHTML = '';
                teams.forEach((team, idx) => {
                    const btn = document.createElement('div');
                    btn.className = 'team-btn' + (idx === 0 ? ' active' : '');
                    btn.innerHTML = `<span>${team.name}</span><span class="team-number">#${team.number}</span>`;
                    btn.dataset.index = idx;
                    btn.addEventListener('click', function(e) {
                        document.querySelectorAll('.team-btn').forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                        updateCard(idx);
                    });
                    listContainer.appendChild(btn);
                });
            }

            function updateCard(index) {
                const team = teams[index];
                if (!team) return;
                cardCar.style.backgroundImage = `url("content/images/cars/${team.car}")`;
                cardName.textContent = team.name;
                cardNumber.textContent = `#${team.number}`;
                // обновляем спонсоров
                cardSponsors.innerHTML = '';
                team.sponsors.forEach(sp => {
                    const div = document.createElement('div');
                    div.className = 'sponsor-logo-sm';
                    div.style.backgroundImage = `url("content/images/sponsors/${sp}")`;
                    cardSponsors.appendChild(div);
                });
                crewEl.innerHTML = `<strong>Пилот:</strong> ${team.pilot} <br><strong>Штурман:</strong> ${team.navigator}`;
            }

            renderTeamButtons();
            // показать первую команду
            if (teams.length) updateCard(0);

            

            // ---- небольшая анимация параллакса (мышь) ----
            document.addEventListener('mousemove', function(e) {
                const x = (e.clientX / window.innerWidth - 0.5) * 8;
                const y = (e.clientY / window.innerHeight - 0.5) * 8;
                const bg = document.getElementById('parallax-bg');
                bg.style.transform = `translate(${x}px, ${y}px)`;
            });

        })();
