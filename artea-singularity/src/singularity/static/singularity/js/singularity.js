class Singularity {

  constructor(body_id) {
    this.body = document.getElementById(body_id);
    this.menu = null;
  }

  createMenu(id, classes) {
    this.menu = document.createElement("nav");
    this.menu.id = id;
    for (var i = 0; i < classes.length; i++) {

      this.menu.classList.add(classes[i]);
    }
  }

  createSingularityUniverseMenu(pagename, badge, universes, galaxies, solaris, terrae) {
    if (this.menu == null) {
      this.createMenu("singularity_universe_menu", ['menu-space-digital']);
    }

    if (this.badge == null) {
      this.addBadgeTo(badge, this.menu);
    }

    if (this.contentBox == null) {
      this.addContentBoxTo(this.menu);
    }

    this.createUniverses(universes);
    this.createGalaxies(galaxies);
    this.createSolaris(solaris);
    this.createTerrae(terrae);

    this.body.appendChild(this.menu);

  }

  addBadgeTo(badge, element) {
    this.badge = document.createElement('img');
    this.badge.classList.add('menu-badge');
    this.badge.src = badge;
    this.badge.alt = 'Badge';
    element.appendChild(this.badge);
  }

  addContentBoxTo(element) {
    this.contentBox = document.createElement('div');
    this.contentBox.classList.add('menu-content');
    element.appendChild(this.contentBox);
  }

  addLinkTo(element, data) {
    var link = document.createElement('a');
    link.href = data.url;
    link.innerHTML = data.label;
    for (var i = 0; i < data.classes.length; i++) {
      link.classList.add(data.classes[i]);
    }
    element.appendChild(link);
  }

  createUniverses(universes) {
    // Création des Univers
    var universNav = document.createElement('div');
    universNav.classList.add('univers-nav');

    var universesTitle = document.createElement('h2');
    universesTitle.innerHTML = "Univers Promordial";
    universNav.appendChild(universesTitle);

    var linkListUniverses = document.createElement('div');
    linkListUniverses.classList.add('link-list');
    universNav.appendChild(linkListUniverses);

    this.contentBox.appendChild(universNav);

    if (universes != null) {
      for (var i = 0; i < universes.length; i++) {
        if (universes[i].current) {
          this.current_univers = universes[i];
          universes[i].classes.push('ms-2');
          universes[i].classes.push('current');
        }
        if (universes[i].disabled) {
          universes[i].classes.push('disabled');
        }
        singularity.addLinkTo(linkListUniverses, universes[i]);
      }
    }
  }

  createGalaxies(galaxies) {
    // Création des Galaxies
    var galaxyNav = document.createElement('div');
    galaxyNav.classList.add('galaxy-nav');

    var galaxiesTitle = document.createElement('h2');
    galaxiesTitle.innerHTML = "Galaxie Naîssante";
    galaxyNav.appendChild(galaxiesTitle);

    var linkListGalaxies = document.createElement('div');
    linkListGalaxies.classList.add('link-list');
    galaxyNav.appendChild(linkListGalaxies);

    this.contentBox.appendChild(galaxyNav);

    if (galaxies != null) {
      for (var i = 0; i < galaxies.length; i++) {
        if (galaxies[i].current) {
          this.current_galaxy = galaxies[i];
          galaxies[i].classes.push('ms-2');
          galaxies[i].classes.push('current');
          //galaxies[i].classes.push('disabled');
          //singularity.addLinkTo(linkListGalaxies, galaxies[i]);
        }
        if (galaxies[i].disabled) {
          galaxies[i].classes.push('disabled');
        }
        singularity.addLinkTo(linkListGalaxies, galaxies[i]);
      }
    }
  }

  createSolaris(solaris) {
    // Création des Solaris
    var solarisNav = document.createElement('div');
    solarisNav.classList.add('solaris-nav');

    var solarisTitle = document.createElement('h2');
    solarisTitle.innerHTML = "Système Solaris Primaire";
    solarisNav.appendChild(solarisTitle);

    var linkListSolaris = document.createElement('div');
    linkListSolaris.classList.add('link-list');
    solarisNav.appendChild(linkListSolaris);

    this.contentBox.appendChild(solarisNav);

    if (solaris != null) {
      for (var i = 0; i < solaris.length; i++) {
        if (solaris[i].current) {
          this.current_solaris = solaris[i];
          solaris[i].classes.push('ms-2');
          solaris[i].classes.push('current');
        }
        if (solaris[i].disabled) {
          solaris[i].classes.push('disabled');
        }
        singularity.addLinkTo(linkListSolaris, solaris[i]);
      }
    }
  }

  createTerrae(terrae) {
    // Création des Terrae
    var terraNav = document.createElement('div');
    terraNav.classList.add('terra-nav');

    var terraeTitle = document.createElement('h2');

    if (terrae == null) {
      terraeTitle.innerHTML = "Aucune Planète...";
    }
    else {
      terraeTitle.innerHTML = "Planète Digitale";
    }

    terraNav.appendChild(terraeTitle);

    var linkListTerrae = document.createElement('div');
    linkListTerrae.classList.add('link-list');
    terraNav.appendChild(linkListTerrae);

    this.contentBox.appendChild(terraNav);

    if (terrae != null) {
      for (var i = 0; i < terrae.length; i++) {
        if (terrae[i].current) {
          this.current_terrae = terrae[i];
          terrae[i].classes.push('ms-2');
          terrae[i].classes.push('current');
        }
        if (terrae[i].disabled) {
          terrae[i].classes.push('disabled');
        }
        singularity.addLinkTo(linkListTerrae, terrae[i]);
      }
    }

  }

}

var singularity = null;

function initSingularity(body_id, singularity_data) {
  if (singularity_data == null) {
    var pagename = "harmony";
    var badge = "https://source.unsplash.com/random/";

    var universes = [
      {
        url: "/",
        label: "Singularity",
        description: '',
        classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
        current: true,
      },
    ];

    var galaxies = [
      {
        url: "#",
        label: "Galaxie",
        description: '',
        classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
        current: true,
      },
    ];

    var solaris = [
      {
        url: "#",
        label: "Système Solaire",
        description: '',
        classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
        current: true,
      },
    ];
  }
  else {
    var pagename = singularity_data.pagename;
    var badge = singularity_data.badge;
    var universes = singularity_data.universes;
    var galaxies = singularity_data.galaxies;
    var solaris = singularity_data.solaris;
    var terrae = singularity_data.terrae;
  }

  singularity = new Singularity(body_id);

  singularity.createSingularityUniverseMenu(pagename, badge, universes, galaxies, solaris, terrae);

}
