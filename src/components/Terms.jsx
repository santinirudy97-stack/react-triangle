import React from 'react'
import './Terms.css'

const Terms = () => {
  return (
    <div className="terms">
      <div className="terms-container">
        <h1>Termini e Condizioni</h1>
        <p className="last-updated">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
        
        <section>
          <h2>1. Informazioni Generali</h2>
          <p>
            I presenti Termini e Condizioni disciplinano l'utilizzo del sito web <strong>Triangle Production</strong> 
            (https://triangle.it). L'accesso e l'utilizzo del sito comportano l'accettazione integrale 
            di questi termini.
          </p>
        </section>

        <section>
          <h2>2. Titolare del Sito</h2>
          <p>
            Il sito è di proprietà di <strong>Triangle Production</strong><br/>
            Email: info@triangle.it<br/>
            Sito web: https://triangle.it
          </p>
        </section>

        <section>
          <h2>3. Utilizzo del Sito</h2>
          <p>L'utilizzo del sito è consentito per:</p>
          <ul>
            <li>Consultazione delle informazioni aziendali</li>
            <li>Visualizzazione del portfolio e dei progetti</li>
            <li>Contatto con l'azienda tramite i canali ufficiali</li>
            <li>Navigazione delle sezioni pubbliche</li>
          </ul>
          <p>È vietato utilizzare il sito per:</p>
          <ul>
            <li>Attività illegali o non autorizzate</li>
            <li>Danneggiamento o compromissione della sicurezza</li>
            <li>Invio di contenuti offensivi o inappropriati</li>
            <li>Violazione dei diritti di proprietà intellettuale</li>
          </ul>
        </section>

        <section>
          <h2>4. Contenuti del Sito</h2>
          <p>
            Tutti i contenuti presenti sul sito (testi, immagini, video, loghi, grafica) sono di proprietà 
            di Triangle Production o utilizzati con regolare autorizzazione. È vietata la riproduzione, 
            distribuzione o utilizzo non autorizzato dei contenuti.
          </p>
        </section>

        <section>
          <h2>5. Proprietà Intellettuale</h2>
          <p>
            Il sito e tutti i suoi contenuti sono protetti da diritti di proprietà intellettuale. 
            I marchi, loghi e denominazioni presenti sono di proprietà dei rispettivi titolari. 
            Qualsiasi utilizzo non autorizzato è vietato.
          </p>
        </section>

        <section>
          <h2>6. Limitazione di Responsabilità</h2>
          <p>
            Triangle Production si impegna a mantenere il sito aggiornato e funzionante, tuttavia 
            non garantisce:
          </p>
          <ul>
            <li>La continuità del servizio</li>
            <li>L'assenza di errori o interruzioni</li>
            <li>La compatibilità con tutti i dispositivi</li>
            <li>L'accuratezza assoluta delle informazioni</li>
          </ul>
          <p>
            Triangle Production non è responsabile per eventuali danni derivanti dall'utilizzo del sito.
          </p>
        </section>

        <section>
          <h2>7. Link Esterni</h2>
          <p>
            Il sito può contenere link a siti web di terze parti. Triangle Production non è responsabile 
            per il contenuto, le politiche sulla privacy o le pratiche di tali siti esterni.
          </p>
        </section>

        <section>
          <h2>8. Modifiche ai Termini</h2>
          <p>
            Triangle Production si riserva il diritto di modificare questi Termini e Condizioni 
            in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione 
            della data di aggiornamento.
          </p>
        </section>

        <section>
          <h2>9. Legge Applicabile</h2>
          <p>
            I presenti Termini e Condizioni sono disciplinati dalla legge italiana. 
            Per qualsiasi controversia sarà competente il Foro di [Città], Italia.
          </p>
        </section>

        <section>
          <h2>10. Contatti</h2>
          <p>
            Per qualsiasi domanda relativa ai presenti Termini e Condizioni, contattare:<br/>
            <strong>Email:</strong> info@triangle.it<br/>
            <strong>Sito web:</strong> https://triangle.it
          </p>
        </section>

        <section>
          <h2>11. Validità</h2>
          <p>
            Nel caso in cui una o più disposizioni dei presenti Termini risultassero invalide o 
            inapplicabili, le restanti disposizioni rimarranno pienamente valide ed efficaci.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Terms