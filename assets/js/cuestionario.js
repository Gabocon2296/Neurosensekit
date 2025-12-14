// ============================================
// CUESTIONARIO INTERACTIVO - NEUROSENSE KIT
// ============================================

// Datos del cuestionario
const questionnaireData = {
    questions: [
        {
            id: 1,
            category: "tipo_rehabilitacion",
            question: "¿Qué tipo de rehabilitación o habilitación necesitas?",
            type: "checkbox",
            options: [
                { value: "fisica", label: "Rehabilitación Física", icon: "🏃" },
                { value: "sensorial", label: "Estimulación Sensorial", icon: "👁️" },
                { value: "cognitiva", label: "Rehabilitación Cognitiva", icon: "🧠" },
                { value: "motriz", label: "Habilitación Motriz", icon: "🤲" },
                { value: "auditiva", label: "Habilitación Auditiva", icon: "👂" }
            ]
        },
        {
            id: 2,
            category: "area_afectada",
            question: "¿Qué área del cuerpo necesita atención?",
            type: "checkbox",
            options: [
                { value: "manos", label: "Manos y dedos", icon: "🖐️" },
                { value: "brazos", label: "Brazos", icon: "💪" },
                { value: "piernas", label: "Piernas", icon: "🦵" },
                { value: "pies", label: "Pies", icon: "🦶" },
                { value: "cuerpo_completo", label: "Cuerpo completo", icon: "🧍" }
            ]
        },
        {
            id: 3,
            category: "sintomas",
            question: "¿Cuáles son tus síntomas o limitaciones principales?",
            type: "checkbox",
            options: [
                { value: "debilidad_muscular", label: "Debilidad muscular", icon: "💔" },
                { value: "falta_coordinacion", label: "Falta de coordinación", icon: "🔄" },
                { value: "dolor", label: "Dolor o molestia", icon: "😣" },
                { value: "perdida_sensibilidad", label: "Pérdida de sensibilidad", icon: "🚫" },
                { value: "rigidez", label: "Rigidez o espasticidad", icon: "🔒" },
                { value: "falta_equilibrio", label: "Falta de equilibrio", icon: "⚖️" }
            ]
        },
        {
            id: 4,
            category: "rango_movimiento",
            question: "¿Cuál es tu rango de movimiento actual?",
            type: "single",
            options: [
                { value: "muy_limitado", label: "Muy limitado (poco movimiento)", icon: "🔴" },
                { value: "limitado", label: "Limitado (movimiento reducido)", icon: "🟡" },
                { value: "moderado", label: "Moderado (movimiento aceptable)", icon: "🟢" },
                { value: "bueno", label: "Bueno (movimiento casi normal)", icon: "🟢🟢" }
            ]
        },
        {
            id: 5,
            category: "historial_medico",
            question: "¿Tienes alguna condición médica diagnosticada?",
            type: "checkbox",
            options: [
                { value: "accidente_cerebrovascular", label: "Accidente cerebrovascular (ACV)", icon: "🧠" },
                { value: "traumatismo", label: "Traumatismo craneoencefálico", icon: "⚠️" },
                { value: "paralisis_cerebral", label: "Parálisis cerebral", icon: "🧬" },
                { value: "lesion_medular", label: "Lesión medular", icon: "🦴" },
                { value: "artritis", label: "Artritis/Artrosis", icon: "🦴" },
                { value: "autismo", label: "Autismo", icon: "🌈" },
                { value: "TDAH", label: "TDAH/Dificultades de atención", icon: "🎯" },
                { value: "neuropatia", label: "Neuropatía", icon: "⚡" },
                { value: "ninguna", label: "Ninguna diagnosticada", icon: "✅" }
            ]
        },
        {
            id: 6,
            category: "duracion_rehabilitacion",
            question: "¿Hace cuánto tiempo iniciaste la rehabilitación?",
            type: "single",
            options: [
                { value: "menos_1_mes", label: "Menos de 1 mes", icon: "📅" },
                { value: "1_3_meses", label: "1-3 meses", icon: "📅" },
                { value: "3_6_meses", label: "3-6 meses", icon: "📅" },
                { value: "mas_6_meses", label: "Más de 6 meses", icon: "📅" },
                { value: "no_ha_iniciado", label: "Aún no ha iniciado", icon: "🚀" }
            ]
        },
        {
            id: 7,
            category: "intensidad_ejercicio",
            question: "¿Cuántas veces por semana realizas terapia/ejercicios?",
            type: "single",
            options: [
                { value: "no_realiza", label: "No realiza", icon: "❌" },
                { value: "1_2_veces", label: "1-2 veces por semana", icon: "📍" },
                { value: "3_4_veces", label: "3-4 veces por semana", icon: "📍📍" },
                { value: "5_mas_veces", label: "5 o más veces por semana", icon: "📍📍📍" }
            ]
        },
        {
            id: 8,
            category: "sensibilidad",
            question: "¿Tienes alguna sensibilidad especial o alergia?",
            type: "checkbox",
            options: [
                { value: "sin_sensibilidad", label: "Sin sensibilidades especiales", icon: "✅" },
                { value: "hipersensiblidad_tactil", label: "Hipersensibilidad táctil", icon: "🎭" },
                { value: "sensibilidad_luz", label: "Sensibilidad a la luz", icon: "💡" },
                { value: "sensibilidad_sonido", label: "Sensibilidad al sonido", icon: "🔊" },
                { value: "alergia_latex", label: "Alergia al látex", icon: "⚠️" },
                { value: "alergia_otros_materiales", label: "Alergia a otros materiales", icon: "⚠️" }
            ]
        },
        {
            id: 9,
            category: "objetivos",
            question: "¿Cuál es tu objetivo principal?",
            type: "single",
            options: [
                { value: "recuperar_funcionalidad", label: "Recuperar funcionalidad perdida", icon: "🎯" },
                { value: "mejorar_sensibilidad", label: "Mejorar sensibilidad", icon: "👁️" },
                { value: "aumentar_fuerza", label: "Aumentar fuerza y resistencia", icon: "💪" },
                { value: "mejorar_coordinacion", label: "Mejorar coordinación y equilibrio", icon: "⚖️" },
                { value: "mantener_capacidades", label: "Mantener capacidades actuales", icon: "🛡️" }
            ]
        },
        {
            id: 10,
            category: "edad",
            question: "¿Cuál es tu rango de edad?",
            type: "single",
            options: [
                { value: "0_5", label: "0-5 años (Estimulación temprana)", icon: "👶" },
                { value: "6_12", label: "6-12 años (Infantil)", icon: "👧" },
                { value: "13_17", label: "13-17 años (Adolescente)", icon: "🧑" },
                { value: "18_40", label: "18-40 años (Adulto joven)", icon: "👨" },
                { value: "41_65", label: "41-65 años (Adulto mayor)", icon: "👴" },
                { value: "65_plus", label: "65+ años (Adulto mayor avanzado)", icon: "👵" }
            ]
        }
    ],

    // Componentes recomendados por categoría
    kitComponents: {
        fisica: {
            items: [
                { name: "Bandas elásticas resistentes", quantity: 3, description: "Diferentes niveles de resistencia para fortalecimiento" },
                { name: "Pelotas terapéuticas", quantity: 4, description: "Diferentes tamaños para ejercicios de fuerza y coordinación" },
                { name: "Barras de equilibrio", quantity: 1, description: "Para trabajar estabilidad y coordinación" }
            ],
            priority: "alta"
        },
        sensorial: {
            items: [
                { name: "Pelotas sensoriales texturizadas", quantity: 5, description: "Diferentes texturas para estimulación táctil" },
                { name: "Tubos sensoriales", quantity: 2, description: "Estimulación visual y táctil" },
                { name: "Herramientas de estimulación táctil", quantity: 3, description: "Para diferentes tipos de toque" }
            ],
            priority: "alta"
        },
        cognitiva: {
            items: [
                { name: "Fichas de ejercicios mentales", quantity: "personalizadas", description: "Impresos según evaluación" },
                { name: "Videos de entrenamiento cognitivo", quantity: "acceso", description: "Plataforma de ejercicios interactivos" },
                { name: "Guía de estimulación cerebral", quantity: 1, description: "Protocolo personalizado" }
            ],
            priority: "media"
        },
        motriz: {
            items: [
                { name: "Conos de coordinación", quantity: 6, description: "Para ejercicios de motricidad gruesa" },
                { name: "Escalera de agilidad", quantity: 1, description: "Entrenamiento de velocidad y coordinación" },
                { name: "Pelotas de diferentes pesos", quantity: 4, description: "Progresión de dificultad" }
            ],
            priority: "alta"
        },
        auditiva: {
            items: [
                { name: "Audífonos de prueba", quantity: 1, description: "Para evaluación y ajuste" },
                { name: "Ejercicios auditivos", quantity: "personalizados", description: "Protocolos específicos" },
                { name: "Materiales informativos", quantity: 1, description: "Guía de habilitación auditiva" }
            ],
            priority: "media"
        }
    }
};

// Clase para gestionar el cuestionario
class Questionnaire {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.totalQuestions = questionnaireData.questions.length;
        this.containerEl = null;
    }

    initialize(containerId) {
        this.containerEl = document.getElementById(containerId);
        if (!this.containerEl) {
            console.error(`Contenedor ${containerId} no encontrado`);
            return;
        }
        this.render();
    }

    render() {
        if (this.currentQuestion >= this.totalQuestions) {
            this.showResults();
            return;
        }

        const question = questionnaireData.questions[this.currentQuestion];
        this.containerEl.innerHTML = this.getQuestionHTML(question);
        this.attachEventListeners(question);
    }

    getQuestionHTML(question) {
        const progress = ((this.currentQuestion / this.totalQuestions) * 100).toFixed(0);
        
        let html = `
            <div class="questionnaire-container animate__animated animate__fadeIn">
                <div class="question-header">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <p class="progress-text">Pregunta ${this.currentQuestion + 1} de ${this.totalQuestions}</p>
                </div>
                
                <h2 class="question-title">${question.question}</h2>
                <p class="question-description">Selecciona una o más opciones según corresponda</p>
                
                <div class="options-container">
        `;

        if (question.type === "checkbox") {
            html += this.renderCheckboxOptions(question);
        } else if (question.type === "single") {
            html += this.renderSingleOptions(question);
        }

        html += `
                </div>
                
                <div class="navigation-buttons">
                    <button class="btn btn-secondary" id="prevBtn" style="display: ${this.currentQuestion === 0 ? 'none' : 'block'}">
                        <i class="fas fa-arrow-left"></i> Anterior
                    </button>
                    <button class="btn btn-primary" id="nextBtn">
                        ${this.currentQuestion === this.totalQuestions - 1 ? 'Ver Resultados' : 'Siguiente'} <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        return html;
    }

    renderCheckboxOptions(question) {
        return question.options.map(option => `
            <label class="option-label checkbox-option">
                <input 
                    type="checkbox" 
                    name="${question.id}" 
                    value="${option.value}"
                    class="option-input"
                    ${this.isOptionSelected(question.id, option.value) ? 'checked' : ''}
                />
                <div class="option-content">
                    <span class="option-icon">${option.icon}</span>
                    <span class="option-text">${option.label}</span>
                </div>
            </label>
        `).join('');
    }

    renderSingleOptions(question) {
        return question.options.map(option => `
            <label class="option-label radio-option">
                <input 
                    type="radio" 
                    name="${question.id}" 
                    value="${option.value}"
                    class="option-input"
                    ${this.isOptionSelected(question.id, option.value) ? 'checked' : ''}
                />
                <div class="option-content">
                    <span class="option-icon">${option.icon}</span>
                    <span class="option-text">${option.label}</span>
                </div>
            </label>
        `).join('');
    }

    isOptionSelected(questionId, optionValue) {
        const answer = this.answers[questionId];
        if (!answer) return false;
        
        if (Array.isArray(answer)) {
            return answer.includes(optionValue);
        }
        return answer === optionValue;
    }

    attachEventListeners(question) {
        const inputs = this.containerEl.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        const nextBtn = this.containerEl.querySelector('#nextBtn');
        const prevBtn = this.containerEl.querySelector('#prevBtn');

        inputs.forEach(input => {
            input.addEventListener('change', () => this.handleInputChange(question.id, input));
        });

        nextBtn.addEventListener('click', () => this.nextQuestion());
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
    }

    handleInputChange(questionId, input) {
        const question = questionnaireData.questions.find(q => q.id === questionId);
        
        if (question.type === "checkbox") {
            if (!this.answers[questionId]) {
                this.answers[questionId] = [];
            }
            if (input.checked) {
                this.answers[questionId].push(input.value);
            } else {
                this.answers[questionId] = this.answers[questionId].filter(v => v !== input.value);
            }
        } else {
            this.answers[questionId] = input.value;
        }

        // Habilitar botón siguiente si hay selección
        const nextBtn = this.containerEl.querySelector('#nextBtn');
        // Siempre permitir continuar - los usuarios pueden saltar sin responder
        // const hasAnswer = this.answers[questionId] && 
        //     (Array.isArray(this.answers[questionId]) ? this.answers[questionId].length > 0 : true);
        // nextBtn.disabled = !hasAnswer;
    }

    nextQuestion() {
        if (this.currentQuestion < this.totalQuestions - 1) {
            this.currentQuestion++;
            this.render();
        } else {
            this.showResults();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.render();
        }
    }

    showResults() {
        const kit = this.generateKit();
        const resultsHTML = this.getResultsHTML(kit);
        this.containerEl.innerHTML = resultsHTML;
        this.attachResultsEventListeners();
    }

    generateKit() {
        const selectedRehabTypes = this.answers[1] || [];
        const kit = {
            components: [],
            recommendations: [],
            summary: ""
        };

        // Agregar componentes según tipo de rehabilitación
        selectedRehabTypes.forEach(type => {
            if (questionnaireData.kitComponents[type]) {
                kit.components.push({
                    type: type,
                    items: questionnaireData.kitComponents[type].items,
                    priority: questionnaireData.kitComponents[type].priority
                });
            }
        });

        // Generar recomendaciones personalizadas
        kit.recommendations = this.generateRecommendations();
        kit.summary = this.generateSummary(selectedRehabTypes);

        return kit;
    }

    generateRecommendations() {
        const recommendations = [];
        const symptoms = this.answers[3] || [];
        const intensity = this.answers[7];
        const objective = this.answers[9];
        const age = this.answers[10];
        const range = this.answers[4];

        // Recomendaciones por síntomas
        if (symptoms.includes("debilidad_muscular")) {
            recommendations.push("🏋️ Realizar ejercicios de resistencia progresiva con las bandas elásticas (3-4 series de 10-15 repeticiones)");
            recommendations.push("⏱️ Aumentar gradualmente la intensidad de los ejercicios cada 1-2 semanas");
            recommendations.push("💪 Incluir descanso de 48 horas entre sesiones de fortalecimiento");
        }

        if (symptoms.includes("falta_coordinacion")) {
            recommendations.push("🎯 Practicar ejercicios de coordinación mano-ojo diariamente (10-15 minutos)");
            recommendations.push("⚖️ Trabajar equilibrio con la barra de equilibrio 5 veces a la semana");
            recommendations.push("🧠 Realizar ejercicios de coordinación bilateral");
        }

        if (symptoms.includes("rigidez")) {
            recommendations.push("🔥 Realizar estiramientos 5-10 minutos antes de cada sesión");
            recommendations.push("🌡️ Aplicar calor local durante 15-20 minutos antes de iniciar ejercicios");
            recommendations.push("💆 Combinar terapia manual con ejercicios activos");
        }

        if (symptoms.includes("falta_equilibrio")) {
            recommendations.push("⚖️ Practicar ejercicios de equilibrio estático antes de dinámico");
            recommendations.push("🧍 Aumentar progresivamente la complejidad de los ejercicios");
            recommendations.push("🛡️ Realizar ejercicios con apoyo seguro para prevenir caídas");
        }

        // Recomendaciones por frecuencia de ejercicio
        if (intensity === "no_realiza") {
            recommendations.push("📅 IMPORTANTE: Comenzar con 2-3 sesiones por semana de 20-30 minutos");
            recommendations.push("📈 Semana 1-2: Adaptación; Semana 3-4: Aumento de intensidad");
            recommendations.push("🎯 Establecer horarios fijos para generar hábito");
        } else if (intensity === "1_2_veces") {
            recommendations.push("📅 Incrementar a 3-4 sesiones por semana para lograr resultados óptimos");
            recommendations.push("⏰ Cada sesión debe durar mínimo 30-45 minutos");
        } else if (intensity === "3_4_veces") {
            recommendations.push("✅ Frecuencia adecuada; mantener esta consistencia");
            recommendations.push("📊 Variar ejercicios cada 2-3 semanas para evitar meseta");
        } else if (intensity === "5_mas_veces") {
            recommendations.push("💯 Excelente consistencia; asegurar variedad en rutina");
            recommendations.push("🔄 Integrar días de recuperación activa (yoga, estiramientos)");
        }

        // Recomendaciones por objetivo
        if (objective === "recuperar_funcionalidad") {
            recommendations.push("🎯 Enfoque en movimientos funcionales específicos a tu condición");
            recommendations.push("📊 Registrar habilidades alcanzadas cada 2 semanas");
        } else if (objective === "aumentar_fuerza") {
            recommendations.push("💪 Usar resistencia progresiva; aumentar 10% cada 2 semanas");
            recommendations.push("🥗 Asegurar ingesta adecuada de proteínas");
        } else if (objective === "mejorar_coordinacion") {
            recommendations.push("🎯 Practicar movimientos coordinados 5 veces por semana");
            recommendations.push("🧠 Los primeros resultados aparecerán entre 2-4 semanas");
        }

        // Recomendaciones generales
        recommendations.push("🧑‍⚕️ Consultar con tu terapeuta para ajustar el programa según progreso");
        recommendations.push("📱 Descargar nuestra app para registrar ejercicios diarios");
        recommendations.push("📊 Evaluar progreso cada 30 días con tu especialista");
        recommendations.push("⚠️ Detener ejercicio inmediatamente si experimentas dolor agudo");

        return recommendations;
    }

    generateSummary(types) {
        const typeLabels = {
            fisica: "Rehabilitación Física",
            sensorial: "Estimulación Sensorial",
            cognitiva: "Rehabilitación Cognitiva",
            motriz: "Habilitación Motriz",
            auditiva: "Habilitación Auditiva"
        };

        const labels = types.map(t => typeLabels[t] || t).join(", ");
        return `Tu kit personalizado incluye elementos para: ${labels}`;
    }

    getResultsHTML(kit) {
        let html = `
            <div class="results-container animate__animated animate__fadeIn">
                <div class="results-header">
                    <div class="results-badge">✓ EVALUACIÓN COMPLETADA</div>
                    <h2 class="results-title">Tu Kit Personalizado</h2>
                    <p class="results-subtitle">${kit.summary}</p>
                </div>

                <div class="results-content">
                    <!-- TARJETA DE DIAGNÓSTICO GENERAL -->
                    <div class="diagnosis-section">
                        <div class="diagnosis-card">
                            <h3 class="diagnosis-title">📋 Resumen de tu Evaluación</h3>
                            <div class="diagnosis-details">
                                <div class="detail-item">
                                    <span class="detail-label">Tipos de Rehabilitación:</span>
                                    <span class="detail-value">${this.getRehabTypes()}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Áreas a Atender:</span>
                                    <span class="detail-value">${this.getAffectedAreas()}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Síntomas Principales:</span>
                                    <span class="detail-value">${this.getPrimarySymptoms()}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Rango de Movimiento:</span>
                                    <span class="detail-value">${this.getMovementRange()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- COMPONENTES DEL KIT -->
                    <div class="kit-components-section">
                        <h3 class="section-title">📦 Componentes</h3>
                        <div class="components-grid">
        `;

        kit.components.forEach(component => {
            const iconMap = {
                fisica: "🏋️",
                sensorial: "👁️",
                cognitiva: "🧠",
                motriz: "🤲",
                auditiva: "👂"
            };
            const icon = iconMap[component.type] || "📦";
            
            html += `
                <div class="component-card">
                    <div class="component-header">
                        <span class="component-icon">${icon}</span>
                        <h4 class="component-title">${this.formatLabel(component.type)}</h4>
                    </div>
                    <div class="component-items">
            `;

            component.items.forEach((item, idx) => {
                html += `
                    <div class="item">
                        <div class="item-number">${idx + 1}</div>
                        <div class="item-content">
                            <div class="item-name">${item.name}</div>
                            <div class="item-desc">${item.description}</div>
                            <div class="item-qty">x${item.quantity}</div>
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
        `;
        });        html += `
                        </div>
                    </div>

                    <!-- PLAN DE TRATAMIENTO -->
                    <div class="treatment-plan-section">
                        <h3 class="section-title">📅 Plan de Tratamiento Personalizado</h3>
                        <div class="treatment-grid">
                            <div class="treatment-card">
                                <h4 class="treatment-title">⏰ Frecuencia Recomendada</h4>
                                <p class="treatment-content">${this.getTreatmentFrequency()}</p>
                            </div>
                            <div class="treatment-card">
                                <h4 class="treatment-title">⏱️ Duración de Sesión</h4>
                                <p class="treatment-content">${this.getSessionDuration()}</p>
                            </div>
                            <div class="treatment-card">
                                <h4 class="treatment-title">📊 Duración del Programa</h4>
                                <p class="treatment-content">${this.getProgramDuration()}</p>
                            </div>
                            <div class="treatment-card">
                                <h4 class="treatment-title">📈 Objetivo Principal</h4>
                                <p class="treatment-content">${this.getPrimaryObjective()}</p>
                            </div>
                        </div>
                    </div>

                    <!-- RECOMENDACIONES PROFESIONALES -->
                    <div class="recommendations-section">
                        <h3 class="section-title">💡 Recomendaciones Profesionales</h3>
                        <div class="recommendations-list">
        `;

        kit.recommendations.forEach((rec, idx) => {
            const priority = idx < 3 ? "high" : "normal";
            html += `<div class="recommendation-item priority-${priority}"><span class="rec-number">${idx + 1}</span>${rec}</div>`;
        });

        html += `
                        </div>
                    </div>

                    <!-- KIT PRICING Y CTA -->
                    <div class="pricing-section">
                        <div class="pricing-card">
                            <div class="pricing-content-wrapper">
                                <div class="pricing-content">
                                    <h3 class="pricing-title">🎁 Tu Kit Personalizado</h3>
                                    <p class="pricing-desc">Incluye todos los componentes recomendados + acceso a:</p>
                                    <ul class="pricing-features">
                                        <li>✓ Videos guiados de ejercicios (30+ videos HD)</li>
                                        <li>✓ Plan de ejercicios impreso personalizado</li>
                                        <li>✓ Seguimiento por especialista (primeros 30 días)</li>
                                        <li>✓ Acceso a app de registro de progreso</li>
                                        <li>✓ Ajustes gratuitos después de 15 días</li>
                                    </ul>
                                    <div class="pricing-amount">
                                        <span class="price-label">Precio Total:</span>
                                        <span class="price-value">$800 MXN</span>
                                    </div>
                                </div>
                                <div class="pricing-image">
                                    <img src="assets/images/hero2.png" alt="Kit NeuroSense" class="kit-hero-image"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BOTONES DE ACCIÓN -->
                    <div class="action-buttons">
                        <button class="btn btn-primary" id="purchaseBtn">
                            <i class="fas fa-shopping-cart"></i> Comprar Kit Personalizado
                        </button>
                        <button class="btn btn-secondary" id="contactBtn">
                            <i class="fas fa-phone"></i> Contactar Asesor
                        </button>
                        <button class="btn btn-outline" id="restartBtn">
                            <i class="fas fa-redo"></i> Hacer Otro Cuestionario
                        </button>
                    </div>

                    <!-- NOTA IMPORTANTE -->
                    <div class="disclaimer-section">
                        <p class="disclaimer-text">
                            <strong>⚕️ Aviso Importante:</strong> Este cuestionario proporciona recomendaciones generales basadas en tus respuestas. 
                            Es fundamental que consultes con un profesional de la salud calificado antes de iniciar cualquier programa de rehabilitación. 
                            NeuroSense Kit no reemplaza la evaluación médica profesional.
                        </p>
                    </div>
                </div>
            </div>
        `;

        return html;
    }

    // Métodos auxiliares para extraer información
    formatLabel(text) {
        const labels = {
            fisica: "Rehabilitación Física",
            sensorial: "Estimulación Sensorial",
            cognitiva: "Rehabilitación Cognitiva",
            motriz: "Habilitación Motriz",
            auditiva: "Habilitación Auditiva"
        };
        return labels[text] || text;
    }

    getRehabTypes() {
        const types = this.answers[1] || [];
        if (types.length === 0) return "No especificado";
        return types.map(t => this.formatLabel(t)).join(", ");
    }

    getAffectedAreas() {
        const areas = this.answers[2] || [];
        if (areas.length === 0) return "No especificado";
        const labels = {
            manos: "Manos y dedos",
            brazos: "Brazos",
            piernas: "Piernas",
            pies: "Pies",
            cuerpo_completo: "Cuerpo completo"
        };
        return areas.map(a => labels[a] || a).join(", ");
    }

    getPrimarySymptoms() {
        const symptoms = this.answers[3] || [];
        if (symptoms.length === 0) return "No especificado";
        const labels = {
            debilidad_muscular: "Debilidad muscular",
            falta_coordinacion: "Falta de coordinación",
            dolor: "Dolor o molestia",
            perdida_sensibilidad: "Pérdida de sensibilidad",
            rigidez: "Rigidez o espasticidad",
            falta_equilibrio: "Falta de equilibrio"
        };
        return symptoms.slice(0, 3).map(s => labels[s] || s).join(", ");
    }

    getMovementRange() {
        const range = this.answers[4];
        const labels = {
            muy_limitado: "Muy limitado",
            limitado: "Limitado",
            moderado: "Moderado",
            bueno: "Bueno"
        };
        return labels[range] || "No especificado";
    }

    getTreatmentFrequency() {
        const intensity = this.answers[7];
        const labels = {
            no_realiza: "3-4 sesiones por semana (recomendado para iniciar)",
            "1_2_veces": "4-5 sesiones por semana",
            "3_4_veces": "4-5 sesiones por semana (actual)",
            "5_mas_veces": "5-6 sesiones por semana con días de recuperación"
        };
        return labels[intensity] || "3-4 sesiones por semana";
    }

    getSessionDuration() {
        const intensity = this.answers[7];
        return intensity === "no_realiza" ? "20-30 minutos (iniciantes)" : "30-45 minutos";
    }

    getProgramDuration() {
        const duration = this.answers[6];
        const labels = {
            menos_1_mes: "Programa de 8-12 semanas desde ahora",
            "1_3_meses": "Programa de 8-10 semanas de continuidad",
            "3_6_meses": "Programa de 6-8 semanas de consolidación",
            "mas_6_meses": "Programa de 4-6 semanas de especialización",
            no_ha_iniciado: "Programa inicial de 12 semanas"
        };
        return labels[duration] || "8-12 semanas";
    }

    getPrimaryObjective() {
        const objective = this.answers[9];
        const labels = {
            recuperar_funcionalidad: "Recuperar funcionalidad perdida",
            mejorar_sensibilidad: "Mejorar sensibilidad y percepción",
            aumentar_fuerza: "Aumentar fuerza y resistencia",
            mejorar_coordinacion: "Mejorar coordinación y equilibrio",
            mantener_capacidades: "Mantener capacidades actuales"
        };
        return labels[objective] || "Mejorar capacidades funcionales";
    }

    attachResultsEventListeners() {
        const purchaseBtn = document.getElementById('purchaseBtn');
        const restartBtn = document.getElementById('restartBtn');
        const contactBtn = document.getElementById('contactBtn');

        if (purchaseBtn) {
            purchaseBtn.onclick = () => {
                alert('¡Excelente! Tu kit personalizado está listo.\n\nEn breve te contactaremos para confirmar tu pedido y procesar el pago.\n\nTe enviaremos un email con todos los detalles de tu compra y el kit completo.');
            };
        }

        if (contactBtn) {
            contactBtn.onclick = () => {
                const message = encodeURIComponent('Hola, me gustaría asesoría sobre mi kit personalizado de rehabilitación. He completado el cuestionario de NeuroSense Kit.');
                window.open(`https://wa.me/526691163453?text=${message}`, '_blank');
            };
        }

        if (restartBtn) {
            restartBtn.onclick = () => {
                this.restart();
            };
        }
    }

    restart() {
        this.currentQuestion = 0;
        this.answers = {};
        this.render();
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const cuestionario = new Questionnaire();
    cuestionario.initialize('cuestionario-container');
    
    // Guardar referencia global para acceso desde HTML
    window.cuestionario = cuestionario;
});
