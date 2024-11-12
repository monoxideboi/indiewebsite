async function getStats() {
    const url = "https://nekoweb.org/api/site/info/asoik";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      document.getElementById("views").innerHTML = json.views;
      document.getElementById('followers').innerHTML = json.followers;
      document.getElementById("update").innerHTML = new Date(json.updated_at).toLocaleDateString();
      document.getElementById("create").innerHTML = new Date(json.created_at).toLocaleDateString();

    } catch (error) {
      console.error(error.message);
    }
  }