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

const CreateArticleDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-6">Criar Novo Artigo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Criar Novo Artigo</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar um novo artigo para o blog.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" placeholder="Digite o título do artigo" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">URL da Imagem</Label>
            <Input id="image" placeholder="Cole a URL da imagem de capa" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="imageCredit">Créditos da Imagem</Label>
            <Input id="imageCredit" placeholder="Ex: Foto por John Smith no Unsplash" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Conteúdo</Label>
            <Textarea
              id="content"
              placeholder="Digite o conteúdo do artigo"
              className="min-h-[200px]"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button">
            Cancelar
          </Button>
          <Button type="submit">
            Publicar Artigo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateArticleDialog;