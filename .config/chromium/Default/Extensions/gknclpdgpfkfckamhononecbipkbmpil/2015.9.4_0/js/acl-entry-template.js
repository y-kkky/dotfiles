if (!!!templates) var templates = {};
templates["acl-entry-template"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li data-entry=\"");t.b(t.v(t.f("entry",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <input type=\"checkbox\" ");t.b(t.v(t.f("checked",c,p,0)));t.b(" ");t.b(t.v(t.f("disabled",c,p,0)));t.b(" >");t.b("\n" + i);t.b("  <img src=\"");t.b(t.v(t.f("src",c,p,0)));t.b("\" width=\"24\" height=\"24\">");t.b("\n" + i);t.b("  <div class=\"name\">");t.b(t.v(t.f("name",c,p,0)));t.b(" </div>");t.b("\n" + i);t.b("  <div class=\"orgname\"> ");t.b(t.v(t.f("orgname",c,p,0)));t.b(" </div>");t.b("\n" + i);t.b("  <div class=\"email\"></div>");t.b("\n" + i);t.b("</li>");return t.fl(); },partials: {}, subs: {  }});
