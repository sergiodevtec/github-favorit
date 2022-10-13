// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    update() {
        this.removeAllTr()
      

        entries.forEach(user => {
          console.log(user)
        })
         
      }

      load() {
          
        this.entries = [
          {
            login: 'maykbrito',
            name: 'Mayk Brito',
            public_repos: "76",
            followers: '120000'
          },
          {
            login: 'diego3g',
            name: 'Diego Fernandes',
            public_repos: "65",
            followers: '10000'
          },

        ]
      }
  }

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
      this.removeAllTr()


      this.entries.forEach(user => {
        const row = this.creatRow()
        
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers
        this.tbody.append(row)
      })
    }

  creatRow() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="user">
          <img src="https://github.com/diego3g.png" alt="">
            <a href="https://github.com/diego3g" target="_blank">
                <p>Diego Fernandes</p>
                <span>diego3g</span>
            </a>
        </td>
        <td class="repositories">
            48
        </td>
        <td class="followers">
            22503
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
        .forEach((item) => {
            item.remove()
        }) 
  }
}


