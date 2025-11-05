import React from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
        
        <section>
          <h2>1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati è <strong>Triangle Production</strong><br/>
            Email: info@triangle.it<br/>
            Sito web: https://triangle.it
          </p>
        </section>

        <section>
          <h2>2. Tipologie di Dati Raccolti</h2>
          <p>Questo sito raccoglie i seguenti tipi di dati:</p>
          <ul>
            <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, durata della visita</li>
            <li><strong>Dati di contatto:</strong> nome, email, messaggio (solo se forniti volontariamente tramite form di contatto)</li>
            <li><strong>Cookie tecnici:</strong> necessari per il funzionamento del sito</li>
          </ul>
        </section>

        <section>
          <h2>3. Finalità del Trattamento</h2>
          <p>I dati personali sono trattati per le seguenti finalità:</p>
          <ul>
            <li>Garantire il corretto funzionamento del sito web</li>
            <li>Rispondere alle richieste di contatto</li>
            <li>Migliorare l'esperienza di navigazione</li>
            <li>Analisi statistiche anonime del traffico</li>
            <li>Adempimenti di legge</li>
          </ul>
        </section>

        <section>
          <h2>4. Base Giuridica del Trattamento</h2>
          <p>Il trattamento dei dati è basato su:</p>
          <ul>
            <li><strong>Consenso:</strong> per i cookie non tecnici e comunicazioni marketing</li>
            <li><strong>Interesse legittimo:</strong> per l'analisi del traffico e la sicurezza del sito</li>
            <li><strong>Esecuzione di un contratto:</strong> per rispondere alle richieste di contatto</li>
            <li><strong>Obbligo di legge:</strong> per gli adempimenti normativi</li>
          </ul>
        </section>

        <section>
          <h2>5. Modalità di Trattamento</h2>
          <p>
            I dati sono trattati con strumenti informatici e telematici, con modalità organizzative 
            e logiche strettamente correlate alle finalità indicate. Oltre al Titolare, potrebbero 
            avere accesso ai dati alcune categorie di incaricati coinvolti nell'organizzazione del 
            sito (amministratori di sistema, personale tecnico).
          </p>
        </section>

        <section>
          <h2>6. Conservazione dei Dati</h2>
          <p>I dati sono conservati per il tempo necessario alle finalità per cui sono stati raccolti:</p>
          <ul>
            <li><strong>Dati di navigazione:</strong> massimo 12 mesi</li>
            <li><strong>Dati di contatto:</strong> fino a 2 anni dalla raccolta o fino alla revoca del consenso</li>
            <li><strong>Cookie tecnici:</strong> durata della sessione o secondo le impostazioni del browser</li>
          </ul>
        </section>

        <section>
          <h2>7. Comunicazione e Diffusione</h2>
          <p>
            I dati personali non sono oggetto di diffusione. Potrebbero essere comunicati a:
          </p>
          <ul>
            <li>Fornitori di servizi tecnici (hosting, manutenzione)</li>
            <li>Autorità competenti per adempimenti di legge</li>
            <li>Consulenti e professionisti per finalità amministrative</li>
          </ul>
        </section>

        <section>
          <h2>8. Trasferimento dei Dati</h2>
          <p>
            I dati sono trattati presso le sedi operative del Titolare in Italia. 
            Alcuni servizi potrebbero utilizzare server ubicati in paesi UE o extra-UE 
            con adeguate garanzie di protezione.
          </p>
        </section>

        <section>
          <h2>9. Diritti dell'Interessato</h2>
          <p>L'interessato ha diritto di:</p>
          <ul>
            <li>Accedere ai propri dati personali</li>
            <li>Rettificare dati inesatti o incompleti</li>
            <li>Cancellare i dati (diritto all'oblio)</li>
            <li>Limitare il trattamento</li>
            <li>Portabilità dei dati</li>
            <li>Opporsi al trattamento</li>
            <li>Revocare il consenso in qualsiasi momento</li>
            <li>Proporre reclamo all'Autorità Garante</li>
          </ul>
          <p>
            Per esercitare i propri diritti, contattare: <strong>info@triangle.it</strong>
          </p>
        </section>

        <section>
          <h2>10. Cookie</h2>
          <p>
            Questo sito utilizza cookie tecnici necessari per il funzionamento. 
            Per maggiori informazioni, consultare la <a href="/cookie-policy">Cookie Policy</a>.
          </p>
        </section>

        <section>
          <h2>11. Sicurezza</h2>
          <p>
            Sono adottate misure di sicurezza tecniche e organizzative adeguate per proteggere 
            i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
          </p>
        </section>

        <section>
          <h2>12. Modifiche alla Privacy Policy</h2>
          <p>
            Questa Privacy Policy può essere aggiornata periodicamente. 
            Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
          </p>
        </section>

        <section>
          <h2>13. Contatti</h2>
          <p>
            Per qualsiasi domanda relativa a questa Privacy Policy o al trattamento dei dati personali, 
            contattare:<br/>
            <strong>Email:</strong> info@triangle.it<br/>
            <strong>Sito web:</strong> https://triangle.it
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy