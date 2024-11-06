import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useUser } from "@/contexts/UserContext";

const CreateArticleDialog = () => {
  const {role  } = useUser();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [imageCredit, setImageCredit] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");


  if (role !== "admin") return null;

  const handleSubmit = async () => {
    if (!title || !author || !image || !imageCredit || !content) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const articleData = {
      title,
      contenttext: content,
      urlimage: image,
      creditoimage: imageCredit,
      usuariosid: 1,
      author:author,
      date: new Date().toISOString() 
    };
  
    try {
      const response = await axios.post("http://localhost:3030/api/posts", articleData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Artigo publicado com sucesso:", response.data);
  
      setTitle("");
      setAuthor("");
      setImage("");
      setImageCredit("");
      setContent("");
      setError("");
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-6">Criar Novo Artigo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Criar Novo Artigo</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar um novo artigo para o blog.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título do artigo"
              required
            />
          
          </div>
          <div className="grid gap-2">
            <Label htmlFor="author">autor</Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Nome do autor"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">URL da Imagem</Label>
            <Input
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Cole a URL da imagem de capa"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="imageCredit">Créditos da Imagem</Label>
            <Input
              id="imageCredit"
              value={imageCredit}
              onChange={(e) => setImageCredit(e.target.value)}
              placeholder="Ex: Foto por John Smith no Unsplash"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Conteúdo</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Digite o conteúdo do artigo"
              className="min-h-[400px]"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button">
            Cancelar
          </Button>
          <Button type="button" onClick={handleSubmit}>
            Publicar Artigo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateArticleDialog;
