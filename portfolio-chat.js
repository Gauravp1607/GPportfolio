(() => {
  const scriptUrl = document.currentScript?.src;
  if (scriptUrl) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('portfolio-chat.css', scriptUrl).href;
    document.head.append(stylesheet);
  }

  const answers = [
    {
      match: /\b(hi|hello|hey|namaste)\b/i,
      text: "Hi! I can answer questions about Gaurav's journey, projects, skills, experience, education, certificates, and contact details."
    },
    {
      match: /\b(journey|background|career path|who is gaurav|tell me about gaurav|your story)\b/i,
      text: 'Gaurav completed a BSc in Information Technology (2021–2024), then studied Data Science and Analytics at ExcelR Solutions (2024–2025, Distinction). He is pursuing an MSc in Data Science and Big Data Technologies at MIT-WPU (2025–present). He also interned in Data Analytics at Aivariant from April to July 2025, working with 10K+ records. His interests span AI/ML, NLP, audio intelligence, SQL, and analytics.'
    },
    {
      match: /\b(harmolyric|sargam|mel spectrogram|chroma)\b/i,
      text: 'HarmoLyric AI explores audio processing and deep learning to recognize musical notes and map them to Indian classical Sargam. Its described workflow includes audio feature extraction, note prediction, and a results dashboard. Tools listed include Python, Librosa, Spleeter, Whisper, TensorFlow/Keras, and CNN + Bi-LSTM.'
    },
    {
      match: /\b(querygenie|natural language.to.sql|text.to.sql)\b/i,
      text: 'QueryGenie is an AI-powered SQL and NLP business assistant. It turns a manager’s natural-language question into SQL, queries a database, and explains the result in plain language. The portfolio lists Python, NLP, SQL, Flask, REST APIs, and OpenAI API among its tools.'
    },
    {
      match: /\b(emotion detection|emotion classification)\b/i,
      text: 'Emotion Detection is a machine-learning classification project using prepared data. The portfolio lists Python, Scikit-learn, Pandas, NumPy, preprocessing, and model evaluation. The exact dataset and model are not specified yet.'
    },
    {
      match: /\b(ipl|cricket)\b/i,
      text: 'IPL Cricket Data Analysis explores match and player statistics with SQL and visualization tools. The listed tools are SQL, MySQL, Power BI, and Tableau.'
    },
    {
      match: /\b(music generator|raga|melodic)\b/i,
      text: 'The AI Music Generator is a project concept exploring Indian classical raga information and musical patterns to produce structured melodic ideas. Its listed areas include Python, music theory, machine-learning concepts, and audio/sequence processing.'
    },
    {
      match: /\b(sql project|data analytics project|analytics project)\b/i,
      text: 'The Data Analytics & SQL project focuses on querying structured datasets, cleaning and exploring data, and presenting findings through reports and dashboards. The portfolio lists SQL, MySQL, Python, Pandas, Excel, Power BI, and Tableau.'
    },
    {
      match: /\b(projects|projects has|projects built|work|portfolio projects)\b/i,
      text: 'Gaurav’s projects include HarmoLyric AI (audio-to-Sargam), QueryGenie (natural-language-to-SQL), an AI Music Generator concept, Data Analytics & SQL, Emotion Detection, and IPL Cricket Data Analysis.'
    },
    {
      match: /\b(intern|internship|experience|aivariant|10k|10000 records)\b/i,
      text: 'Gaurav was a Data Analytics Intern at Aivariant from April to July 2025. He cleaned and explored datasets with more than 10,000 records using Python, Pandas, and NumPy, then created visualizations and reports to communicate findings.'
    },
    {
      match: /\b(education|degree|university|college|study|studies|m.sc|msc|b.sc|bsc)\b/i,
      text: 'Gaurav is pursuing an MSc in Data Science and Big Data Technologies at MIT World Peace University in Pune (2025–present). He completed Data Science and Data Analytics training at ExcelR Solutions (2024–2025, Distinction) and a BSc in Information Technology at PTVA’s Sathaye College (2021–2024).'
    },
    {
      match: /\b(skill|skills|technology|technologies|tools|stack)\b/i,
      text: 'His skills include Python, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, NLP, LLMs, generative AI, RAG, and FastAPI. For databases: SQL, MySQL, joins, subqueries, CTEs, window functions, indexing, stored procedures, and query optimization. He also uses Power BI, Tableau, Excel, and Git/GitHub.'
    },
    {
      match: /\b(zomathon|smart india hackathon|hackathon|achievement|achievements)\b/i,
      text: 'Gaurav participated in Zomathon – The Data Hackathon, organized by Coding Ninjas with Eternal, and Smart India Hackathon 2025. Zomathon recognized analytical thinking, collaboration, and data-driven decision-making.'
    },
    {
      match: /\b(certificate|certificates|certification|certifications|courses)\b/i,
      text: 'The portfolio lists certificates in Data Analytics (ExcelR), Basic Data Science, Descriptive Statistics using Python, Statistical Data Analysis using MS Excel, Web Development, and AWS Certified Solutions Architect – Associate.'
    },
    {
      match: /\b(interests|outside tech|hobbies|pakhawaj|tabla|classical music)\b/i,
      text: 'Outside technology, Gaurav is interested in Indian classical music and percussion, including pakhawaj and tabla. That interest also connects to his audio and Sargam projects.'
    },
    {
      match: /\b(contact|email|phone|linkedin|github|reach|connect)\b/i,
      text: 'You can reach Gaurav at gauravpanchal320@gmail.com or 9082607499. LinkedIn: linkedin.com/in/gaurav-panchal-623711310/. GitHub: github.com/Gauravp1607.'
    },
    {
      match: /\b(job|jobs|career|opportunit|role|hire|hiring)\b/i,
      text: 'Gaurav is aiming to grow into an AI/ML or SQL-focused engineering role, building dependable, data-driven applications. His experience includes a Data Analytics internship at Aivariant and project work in machine learning, NLP, audio AI, and analytics.'
    },
    {
      match: /\b(resume|résumé|cv)\b/i,
      text: 'You can open Gaurav’s résumé from the Contact page or the View résumé button on the home page.'
    }
  ];

  const widget = document.createElement('div');
  widget.className = 'portfolio-chat';
  widget.innerHTML = `
    <button class="portfolio-chat-launcher" type="button" aria-label="Open portfolio assistant" aria-expanded="false" aria-controls="portfolioChatPanel" title="Ask about Gaurav">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.2-.6L4 20l1.3-3.5A7.2 7.2 0 0 1 4 12c0-4.1 3.6-7.5 8-7.5s8 3 8 7z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>
    </button>
    <section class="portfolio-chat-panel" id="portfolioChatPanel" role="dialog" aria-labelledby="portfolioChatTitle" aria-modal="false" hidden>
      <header class="portfolio-chat-header"><span class="portfolio-chat-avatar" aria-hidden="true">G</span><div class="portfolio-chat-heading"><h2 id="portfolioChatTitle">Ask about Gaurav</h2><p>Portfolio guide · answers from his profile</p></div><button class="portfolio-chat-close" type="button" aria-label="Close assistant">×</button></header>
      <div class="portfolio-chat-log" role="log" aria-live="polite" aria-relevant="additions text"><div class="portfolio-chat-message is-assistant">Hi! Ask me about Gaurav’s journey, projects, skills, experience, education, or certificates.</div></div>
      <div class="portfolio-chat-suggestions" aria-label="Suggested questions"><button type="button">Tell me about his journey</button><button type="button">What projects has he built?</button><button type="button">What are his skills?</button></div>
      <p class="portfolio-chat-note">Answers are based on information in this portfolio.</p>
      <form class="portfolio-chat-form"><input type="text" maxlength="400" autocomplete="off" placeholder="Ask about Gaurav…" aria-label="Ask a question about Gaurav" required><button type="submit" aria-label="Send question"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 6l6 6-6 6"/></svg></button></form>
    </section>`;
  document.body.append(widget);

  const launcher = widget.querySelector('.portfolio-chat-launcher');
  const panel = widget.querySelector('.portfolio-chat-panel');
  const closeButton = widget.querySelector('.portfolio-chat-close');
  const log = widget.querySelector('.portfolio-chat-log');
  const form = widget.querySelector('.portfolio-chat-form');
  const input = form.querySelector('input');

  function addMessage(text, sender) {
    const message = document.createElement('div');
    message.className = `portfolio-chat-message is-${sender}`;
    message.textContent = text;
    log.append(message);
    log.scrollTop = log.scrollHeight;
  }

  function answerQuestion(question) {
    const answer = answers.find((item) => item.match.test(question));
    return answer?.text ?? 'I don’t have that detail in the portfolio yet. Try asking about Gaurav’s journey, projects, skills, experience, education, certificates, or contact details.';
  }

  function sendQuestion(question) {
    const value = question.trim();
    if (!value) return;
    addMessage(value, 'user');
    addMessage(answerQuestion(value), 'assistant');
    input.value = '';
    input.focus();
  }

  launcher.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    launcher.setAttribute('aria-expanded', String(!panel.hidden));
    if (!panel.hidden) input.focus();
  });
  closeButton.addEventListener('click', () => {
    panel.hidden = true;
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus();
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendQuestion(input.value);
  });
  widget.querySelectorAll('.portfolio-chat-suggestions button').forEach((button) => {
    button.addEventListener('click', () => sendQuestion(button.textContent));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      panel.hidden = true;
      launcher.setAttribute('aria-expanded', 'false');
      launcher.focus();
    }
  });
})();

