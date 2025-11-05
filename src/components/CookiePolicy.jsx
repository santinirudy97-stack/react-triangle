import React from 'react'
import './CookiePolicy.css'

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <div className="cookie-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
        
        <section>
          <h2>1. Cosa sono i Cookie</h2>
          <p>
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
            Permettono al sito di ricordare le tue azioni e preferenze per migliorare la tua esperienza di navigazione.
          </p>
        </section>

        <section>
          <h2>2. Cookie utilizzati da questo sito</h2>
          <p>Il sito <strong>Triangle Production</strong> utilizza esclusivamente cookie tecnici necessari per il funzionamento:</p>
          
          <div className="cookie-table">
            <div className="cookie-row header">
              <div>Nome</div>
              <div>Finalità</div>
              <div>Durata</div>
              <div>Tipo</div>
            </div>
            <div className="cookie-row">
              <div>React Router</div>
              <div>Navigazione tra le pagine del sito</div>
              <div>Sessione</div>
              <div>Tecnico</div>
            </div>
            <div className="cookie-row">
              <div>Google Fonts</div>
              <div>Caricamento dei font del sito</div>
              <div>24 ore</div>
              <div>Tecnico</div>
            </div>
          </div>
        </section>

        <section>
          <h2>3. Cookie Tecnici</h2>
          <p>
            I cookie tecnici sono necessari per il corretto funzionamento del sito e non richiedono il consenso dell'utente. 
            Questi cookie permettono di:
          </p>
          <ul>
            <li>Navigare tra le pagine del sito</li>
            <li>Mantenere le preferenze di visualizzazione</li>
            <li>Garantire la sicurezza della navigazione</li>
            <li>Caricare correttamente i contenuti</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookie di Terze Parti</h2>
          <p>
            Questo sito utilizza <strong>Google Fonts</strong> per il caricamento dei caratteri tipografici. 
            Google può impostare cookie tecnici per ottimizzare il caricamento dei font. 
            Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>.
          </p>
        </section>

        <section>
          <h2>5. Gestione dei Cookie</h2>
          <p>Puoi gestire i cookie attraverso le impostazioni del tuo browser:</p>
          <ul>
            <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
            <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web</li>
            <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</li>
            <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</li>
          </ul>
          <p>
            <strong>Attenzione:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere 
            il corretto funzionamento del sito.
          </p>
        </section>

        <section>
          <h2>6. Cookie di Profilazione</h2>
          <p>
            Questo sito <strong>NON utilizza</strong> cookie di profilazione o di marketing. 
            Non vengono raccolti dati per finalità pubblicitarie o di tracciamento comportamentale.
          </p>
        </section>

        <section>
          <h2>7. Modifiche alla Cookie Policy</h2>
          <p>
            Questa Cookie Policy può essere aggiornata periodicamente. 
            Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
          </p>
        </section>

        <section>
          <h2>8. Contatti</h2>
          <p>
            Per qualsiasi domanda relativa a questa Cookie Policy, contattare:<br/>
            <strong>Email:</strong> info@triangle.it<br/>
            <strong>Sito web:</strong> https://triangle.it
          </p>
        </section>
      </div>
    </div>
  )
}

export default CookiePolicy